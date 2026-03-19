var e=`## Overview\r
\r
Spoilers in movie reviews reveal key plot points and ruin the experience\r
for viewers who want to preserve suspense. Existing moderation methods —\r
such as user-applied spoiler tags — are often underused, inconsistent,\r
and context-insensitive. Manual moderation at scale is impractical.\r
\r
This project builds an automated spoiler detection system for IMDb movie\r
reviews using the Kaggle IMDB Spoiler Dataset, classifying each review\r
as spoiler or non-spoiler using engineered features derived from review\r
text, user behaviour, and movie metadata.\r
\r
---\r
\r
## Tools & Libraries\r
\r
**Data Handling**\r
- **Python** — primary programming language\r
- **Pandas** — data loading, merging, cleaning, and feature engineering\r
- **NumPy** — numerical operations and array manipulation\r
- **JSON** — parsing raw IMDB dataset files\r
\r
**Visualisation**\r
- **Matplotlib** — custom charts and ROC curve plots\r
- **Seaborn** — boxplots, histograms, heatmaps, and confusion matrices\r
- **WordCloud** — visualising top spoiler-indicative words after lemmatisation\r
\r
**NLP & Feature Engineering**\r
- **Scikit-learn TfidfVectorizer** — computing TF-IDF scores for spoiler word identification and review-synopsis similarity\r
- **Scikit-learn CountVectorizer** — counting occurrences of spoiler-indicative words per review\r
- **spaCy** — lemmatisation of spoiler words to reduce redundancy (e.g. "kills", "killing" → "kill")\r
- **imbalanced-learn SMOTE** — synthetic oversampling to correct the 3:1 class imbalance\r
\r
**Modelling**\r
- **Scikit-learn LogisticRegression** — interpretable linear baseline\r
- **Scikit-learn RandomForestClassifier** — best performing model\r
- **XGBoost XGBClassifier** — gradient boosted trees\r
- **Scikit-learn GridSearchCV** — 3-fold cross-validated hyperparameter tuning\r
\r
**Evaluation**\r
- **Macro F1** — primary metric, weights both classes equally\r
- **Scikit-learn roc_curve / auc** — ROC-AUC evaluation\r
- **Scikit-learn confusion_matrix** — per-class error analysis\r
\r
**Utilities**\r
- **joblib** — serialising trained models and processed datasets\r
- **tqdm** — progress bars for long-running operations\r
- **kagglehub** — programmatic dataset download from Kaggle\r
\r
---\r
\r
## The Data\r
\r
**Source:** Kaggle IMDB Spoiler Dataset, collected by Rishabh Misra (UC San Diego)\r
\r
Two JSON files were merged on \`movie_id\`:\r
- \`IMDB_reviews.json\` — review text, user ID, rating, date, spoiler label\r
- \`IMDB_movie_details.json\` — genre, duration, release date, avg rating, plot synopsis\r
\r
The \`rating\` column was renamed to disambiguate individual review ratings\r
from average movie ratings before merging.\r
\r
![Dataset Preview](/imdb/imdb_dataset.png)\r
\r
*Figure 1 — The merged dataset: 573,913 reviews across 1,572 unique movies, 14 columns*\r
\r
**Cleaning steps:**\r
- Converted \`review_date\` and \`release_date\` to datetime\r
- Converted \`avg_rating\` and \`review_rating\` to numeric\r
- Parsed duration strings like \`"2h 9min"\` into integer minutes\r
- No duplicate rows found\r
- 10 missing \`release_date\` entries filled manually\r
\r
![Data Cleaning](/imdb/imdb_datacleaning.png)\r
\r
*Figure 2 — Data pipeline: two source files merged and cleaned into a single dataframe*\r
\r
---\r
\r
## Class Distribution\r
\r
Out of 573,913 reviews, **150,924 were marked as spoilers** — approximately\r
26% of the dataset. This class imbalance required deliberate handling\r
before modelling.\r
\r
![Class Distribution](/imdb/imdb_pie.png)\r
\r
*Figure 3 — 26% spoilers (150,924) vs 74% non-spoilers (422,989)*\r
\r
---\r
\r
## Exploratory Data Analysis\r
\r
### Distribution of Spoiler Rates Across Movies\r
\r
Spoiler rates across movies follow a roughly bell-shaped distribution\r
centred around 24.86%, with substantial spread from below 10% to above\r
45%. This confirms each movie has its own distinct "spoiler culture."\r
\r
![Movie Spoiler Rate Distribution](/imdb/imdb_moviedist.png)\r
\r
*Figure 4 — Mean spoiler rate across all movies: 24.86%*\r
\r
### Highest and Lowest Spoiler Rate Movies\r
\r
Movies with the highest spoiler rates reach 0.4–0.65, while the lowest\r
fall below 0.08. A movie's historical spoiler rate is a strong predictor\r
of whether its future reviews will contain spoilers.\r
\r
![Top and Bottom Movies](/imdb/imdb_top_bottom_movies.png)\r
\r
*Figure 5 — Star Wars: The Force Awakens among the highest; family films among the lowest*\r
\r
### User Spoiler Rate Distribution\r
\r
Most users have very low spoiler rates (below 0.1), creating a sharp\r
left-side spike, while a long tail extends to around 0.7. This confirms\r
heterogeneous reviewer behaviour — some users consistently post spoilers,\r
others rarely do.\r
\r
![User Spoiler Rate](/imdb/imdb_user_dist.png)\r
\r
*Figure 6 — Log-scale distribution of user spoiler rates (users with ≥5 reviews)*\r
\r
---\r
\r
## Feature Engineering\r
\r
The dataset was split **80/20** using stratified sampling to preserve\r
the class ratio (~460k train, ~110k test). All feature engineering was\r
fitted on training data only and applied unchanged to the test set to\r
prevent data leakage.\r
\r
### Feature 1 — Spoiler Word Count (\`num_occurrence_spoiler_word\`)\r
\r
Applied TF-IDF analysis on the training reviews to identify words more\r
common in spoiler than non-spoiler reviews by computing the\r
spoiler-to-non-spoiler TF-IDF ratio. After lemmatisation with spaCy,\r
the top 20 spoiler-indicative words were extracted. \`CountVectorizer\`\r
then counted how many of these words appeared in each review.\r
\r
![Top Spoiler Words](/imdb/imdb_top_words.png)\r
\r
*Figure 7 — Top 20 spoiler-indicative words by TF-IDF ratio: "spoiler", "kill", "end" dominate*\r
\r
![Word Cloud](/imdb/imdb_words.png)\r
\r
*Figure 8 — Word cloud of top 100 spoiler-indicative words after lemmatisation*\r
\r
### Feature 2 — Weighted Spoiler Word Score (\`num_occurrence_times_ratio\`)\r
\r
Extended Feature 1 by weighting each word count by its TF-IDF ratio,\r
giving stronger emphasis to words that are better spoiler predictors.\r
This accounts for the fact that some spoiler-indicative words are far\r
more discriminative than others — treating all words equally would\r
dilute the signal.\r
\r
![Feature 2 Slide](/imdb/imdb_num_occurence.png)\r
\r
*Figure 9 — Weighted sum formula: each word scaled by its spoiler-to-non-spoiler TF-IDF ratio*\r
\r
### Feature 3 — User Historical Spoiler Rate (\`user_historical_spoiler_rate\`)\r
\r
Some users consistently post spoilers; others rarely do. This feature\r
captures each user's proportion of spoiler reviews from the training set.\r
Unseen users in the test set are assigned the overall training mean as\r
a fallback. Supported by prior work by Wan et al. on SpoilerNet.\r
\r
### Feature 4 — Movie Historical Spoiler Rate (\`movie_historical_spoiler_rate\`)\r
\r
Some movies — particularly those with iconic twists — generate\r
disproportionately more spoiler discussion. This feature captures each\r
movie's historical spoiler rate from the training set. Unseen movies\r
use the training mean as fallback.\r
\r
### Feature 5 — Review-Synopsis Cosine Similarity (\`cosine_sim_between_review_and_plotsynopsis\`)\r
\r
Spoiler reviews tend to overlap more with the movie's plot synopsis,\r
since they reference specific plot events. A \`TfidfVectorizer\` was fitted\r
on combined training reviews and synopses, then cosine similarity was\r
computed between each review vector and its synopsis vector.\r
\r
\`cosine_similarity = (A · B) / (||A|| × ||B||)\`\r
\r
![Cosine Similarity Example](/imdb/imdb_cosineexample.png)\r
\r
*Figure 10 — Spoiler reviews share vocabulary with the synopsis: "Laura eventually killed him" matches "eventually, Laura killed Jason"*\r
\r
![Cosine Similarity Stats](/imdb/imdb_cosinestat.png)\r
\r
*Figure 11 — Spoiler reviews have a median cosine similarity of 0.1409 vs 0.0747 for non-spoilers — a strong, consistent signal*\r
\r
---\r
\r
## Addressing Class Imbalance\r
\r
The training set had a 3:1 non-spoiler to spoiler ratio. **SMOTE**\r
(Synthetic Minority Oversampling Technique) was applied to the training\r
set only to generate synthetic spoiler examples by interpolating between\r
existing minority class instances, producing a balanced 1:1 ratio for\r
training.\r
\r
---\r
\r
## Evaluation Metric\r
\r
Both false negatives (missing a spoiler) and false positives (blocking\r
a safe review) matter equally to users. We therefore used **macro F1**,\r
which averages the F1 scores of each class equally, preventing the\r
majority class from dominating the evaluation.\r
\r
![Why F1](/imdb/imdb_f1.png)\r
\r
*Figure 12 — Macro F1 balances the need to catch spoilers without over-flagging safe reviews*\r
\r
---\r
\r
## Models\r
\r
### Tuning Workflow\r
\r
SMOTE was applied before cross-validation. GridSearchCV with 3-fold CV\r
was used for all three models, tuning on the resampled training data.\r
\r
![Tuning Workflow](/imdb/imdb_workflow.png)\r
\r
*Figure 13 — Pipeline: Raw data → SMOTE resampling → GridSearchCV → Selected Random Forest*\r
\r
---\r
\r
### Model 1 — Logistic Regression\r
\r
A linear baseline tuned over regularisation strength C, penalty type\r
(L1, L2, ElasticNet), solver, and class weight. Best configuration:\r
C=5, L1 penalty, saga solver.\r
\r
**Result:** Macro F1 = 0.745\r
- Non-spoiler F1 = 0.88, Spoiler F1 = 0.61\r
- Recall on spoilers = 0.56 — missing 44% of true spoilers\r
\r
**Feature importance (Logistic Regression):**\r
\r
![LR Feature Importance](/imdb/imdb_lrfeature.png)\r
\r
*Figure 14 — User historical spoiler rate dominates; spoiler word count receives a negative coefficient*\r
\r
The user's known spoiler rate is the most influential feature. Spoiler\r
word count received a negative weight, suggesting that simply counting\r
spoiler words is not a reliable signal in a linear model.\r
\r
**Error analysis:** The model misses short, low-signal spoilers without\r
obvious trigger phrases (e.g. "he was the killer all along") and falsely\r
flags safe reviews containing isolated high-weight words like "dies" or\r
"twist" in hypothetical or negated contexts.\r
\r
---\r
\r
### Model 2 — XGBoost\r
\r
Gradient boosted trees tuned over learning rate, max depth, subsample\r
ratio, and column subsampling. Does not assume linearity between\r
predictors and log odds.\r
\r
**Result:** Macro F1 = 0.745 (same as logistic regression)\r
- Spoiler recall improved to 0.68 from 0.56 — ~2,300 more spoilers caught\r
- Spoiler precision dropped to 0.59 — ~3,000 more false positives\r
\r
**Feature importance (XGBoost):**\r
\r
![XGB Feature Importance](/imdb/imdb_xgfeature.png)\r
\r
*Figure 15 — Movie historical spoiler rate ranked highest by XGBoost, unlike logistic regression*\r
\r
Cosine similarity remained a relatively important feature. Lexical\r
spoiler-word features remained low, reinforcing that word-count signals\r
are weak predictors of spoilers across all models.\r
\r
---\r
\r
### Model 3 — Random Forest *(Best Model)*\r
\r
An ensemble of 200 decision trees with max depth 15, capturing nonlinear\r
relationships and feature interactions. More flexible than logistic\r
regression; complements XGBoost with different ensemble mechanics.\r
\r
**After hyperparameter tuning:**\r
- Non-spoiler: Precision 0.88, Recall 0.87, F1 0.87\r
- Spoiler: Precision 0.62, Recall 0.64, F1 0.64\r
- **Macro F1 = 0.755, AUC = 0.815**\r
\r
![Random Forest Results](/imdb/imdb_rfroc.png)\r
![Random Forest Results](/imdb/imdb_rfconfusion.png)\r
\r
*Figure 16 — Random Forest confusion matrix and ROC curve (AUC = 0.815)*\r
\r
**Feature importance (Random Forest):**\r
\r
The Random Forest feature importance plot closely mirrors logistic\r
regression — user historical spoiler rate remains the dominant feature.\r
Spoiler word features still contribute very little.\r
\r
![RF Feature Importance](/imdb/imdb_rffeature.png)\r
\r
*Figure 17 — User historical spoiler rate ranked highest by Random Forests, similar to logistic regression*\r
\r
**Error analysis:** The model misses subtle spoilers without strong\r
keywords (e.g. "he was the killer all along"), overreacts to phrases\r
like "the butler did it" when used jokingly, and struggles with short,\r
pronoun-heavy reviews. These point to a fundamental limitation of\r
bag-of-words features — they cannot capture narrative structure,\r
long-range dependencies, or negation.\r
\r
---\r
\r
## Results Summary\r
\r
| Model | Macro F1 | AUC | Spoiler Recall |\r
|---|---|---|---|\r
| Logistic Regression | 0.745 | — | 0.56 |\r
| XGBoost | 0.745 | — | 0.68 |\r
| **Random Forest** | **0.755** | **0.815** | **0.64** |\r
\r
![Problem Statement](/imdb/imdb_modelcomparison.png)\r
\r
*Figure 18 — Results Summary*\r
\r
Random Forest achieved the best overall performance. Logistic regression\r
relies on linear decision boundaries and struggles to capture complex\r
feature interactions. XGBoost may have overfit the small feature set,\r
while Random Forest's random feature subsetting helped it generalise\r
better.\r
\r
---\r
\r
## Answering the Problem Statement\r
\r
- **Problem:** Manual spoiler tagging is unreliable and inconsistent\r
- **Solution:** Random Forest classifier detecting spoilers automatically across 5 engineered features\r
- **Outcome:** Consistently accurate spoiler detection across diverse review styles\r
- **Impact:** Improves user experience and reduces manual moderation effort\r
\r
---\r
\r
## Key Takeaways\r
\r
- **Behavioural signals dominate text signals** — user and movie\r
  historical spoiler rates are consistently the most important features\r
  across all three models\r
- **Cosine similarity is a clean feature** — median similarity of 0.14\r
  for spoilers vs 0.07 for non-spoilers confirms the hypothesis that\r
  spoiler text overlaps more with plot synopses\r
- **Spoiler word features underperform** — simply counting spoiler words\r
  proves to be a weak signal; the negative coefficient in logistic\r
  regression suggests word counts may even add noise\r
- **Data leakage discipline is critical** — all vectorizers and\r
  historical rates must be fitted on training data only\r
- **SMOTE meaningfully improves minority class recall** without\r
  requiring downsampling of the majority class\r
\r
---\r
\r
## Future Work\r
\r
**1. Genre as a feature**\r
\r
Our EDA found that Sci-Fi (31%) and Horror (30%) have higher spoiler\r
rates than Musical (20%). While the differences were modest in this\r
dataset, one-hot encoding genres and including them as features could\r
improve detection, especially with a larger cross-platform dataset.\r
\r
**2. Transformer-based embeddings (SBERT)**\r
\r
Our cosine similarity feature relies on TF-IDF, which only captures\r
exact keyword matches and misses semantic synonyms — for example,\r
"dies" versus "passes away". Replacing TF-IDF with Sentence-BERT\r
(SBERT) embeddings would capture semantic similarity even when\r
different words describe the same event, significantly improving\r
the cosine similarity feature's effectiveness.\r
`;export{e as default};