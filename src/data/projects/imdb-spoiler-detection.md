## Overview

Spoilers in movie reviews reveal key plot points and ruin the experience
for viewers who want to preserve suspense. Existing moderation methods —
such as user-applied spoiler tags — are often underused, inconsistent,
and context-insensitive. Manual moderation at scale is impractical.

This project builds an automated spoiler detection system for IMDb movie
reviews using the Kaggle IMDB Spoiler Dataset, classifying each review
as spoiler or non-spoiler using engineered features derived from review
text, user behaviour, and movie metadata.

---

## Tools & Libraries

**Data Handling**
- **Python** — primary programming language
- **Pandas** — data loading, merging, cleaning, and feature engineering
- **NumPy** — numerical operations and array manipulation
- **JSON** — parsing raw IMDB dataset files

**Visualisation**
- **Matplotlib** — custom charts and ROC curve plots
- **Seaborn** — boxplots, histograms, heatmaps, and confusion matrices
- **WordCloud** — visualising top spoiler-indicative words after lemmatisation

**NLP & Feature Engineering**
- **Scikit-learn TfidfVectorizer** — computing TF-IDF scores for spoiler word identification and review-synopsis similarity
- **Scikit-learn CountVectorizer** — counting occurrences of spoiler-indicative words per review
- **spaCy** — lemmatisation of spoiler words to reduce redundancy (e.g. "kills", "killing" → "kill")
- **imbalanced-learn SMOTE** — synthetic oversampling to correct the 3:1 class imbalance

**Modelling**
- **Scikit-learn LogisticRegression** — interpretable linear baseline
- **Scikit-learn RandomForestClassifier** — best performing model
- **XGBoost XGBClassifier** — gradient boosted trees
- **Scikit-learn GridSearchCV** — 3-fold cross-validated hyperparameter tuning

**Evaluation**
- **Macro F1** — primary metric, weights both classes equally
- **Scikit-learn roc_curve / auc** — ROC-AUC evaluation
- **Scikit-learn confusion_matrix** — per-class error analysis

**Utilities**
- **joblib** — serialising trained models and processed datasets
- **tqdm** — progress bars for long-running operations
- **kagglehub** — programmatic dataset download from Kaggle

---

## The Data

**Source:** Kaggle IMDB Spoiler Dataset, collected by Rishabh Misra (UC San Diego)

Two JSON files were merged on `movie_id`:
- `IMDB_reviews.json` — review text, user ID, rating, date, spoiler label
- `IMDB_movie_details.json` — genre, duration, release date, avg rating, plot synopsis

The `rating` column was renamed to disambiguate individual review ratings
from average movie ratings before merging.

![Dataset Preview](/imdb/imdb_dataset.png)

*Figure 1 — The merged dataset: 573,913 reviews across 1,572 unique movies, 14 columns*

**Cleaning steps:**
- Converted `review_date` and `release_date` to datetime
- Converted `avg_rating` and `review_rating` to numeric
- Parsed duration strings like `"2h 9min"` into integer minutes
- No duplicate rows found
- 10 missing `release_date` entries filled manually

![Data Cleaning](/imdb/imdb_datacleaning.png)

*Figure 2 — Data pipeline: two source files merged and cleaned into a single dataframe*

---

## Class Distribution

Out of 573,913 reviews, **150,924 were marked as spoilers** — approximately
26% of the dataset. This class imbalance required deliberate handling
before modelling.

![Class Distribution](/imdb/imdb_pie.png)

*Figure 3 — 26% spoilers (150,924) vs 74% non-spoilers (422,989)*

---

## Exploratory Data Analysis

### Distribution of Spoiler Rates Across Movies

Spoiler rates across movies follow a roughly bell-shaped distribution
centred around 24.86%, with substantial spread from below 10% to above
45%. This confirms each movie has its own distinct "spoiler culture."

![Movie Spoiler Rate Distribution](/imdb/imdb_moviedist.png)

*Figure 4 — Mean spoiler rate across all movies: 24.86%*

### Highest and Lowest Spoiler Rate Movies

Movies with the highest spoiler rates reach 0.4–0.65, while the lowest
fall below 0.08. A movie's historical spoiler rate is a strong predictor
of whether its future reviews will contain spoilers.

![Top and Bottom Movies](/imdb/imdb_top_bottom_movies.png)

*Figure 5 — Star Wars: The Force Awakens among the highest; family films among the lowest*

### User Spoiler Rate Distribution

Most users have very low spoiler rates (below 0.1), creating a sharp
left-side spike, while a long tail extends to around 0.7. This confirms
heterogeneous reviewer behaviour — some users consistently post spoilers,
others rarely do.

![User Spoiler Rate](/imdb/imdb_user_dist.png)

*Figure 6 — Log-scale distribution of user spoiler rates (users with ≥5 reviews)*

---

## Feature Engineering

The dataset was split **80/20** using stratified sampling to preserve
the class ratio (~460k train, ~110k test). All feature engineering was
fitted on training data only and applied unchanged to the test set to
prevent data leakage.

### Feature 1 — Spoiler Word Count (`num_occurrence_spoiler_word`)

Applied TF-IDF analysis on the training reviews to identify words more
common in spoiler than non-spoiler reviews by computing the
spoiler-to-non-spoiler TF-IDF ratio. After lemmatisation with spaCy,
the top 20 spoiler-indicative words were extracted. `CountVectorizer`
then counted how many of these words appeared in each review.

![Top Spoiler Words](/imdb/imdb_top_words.png)

*Figure 7 — Top 20 spoiler-indicative words by TF-IDF ratio: "spoiler", "kill", "end" dominate*

![Word Cloud](/imdb/imdb_words.png)

*Figure 8 — Word cloud of top 100 spoiler-indicative words after lemmatisation*

### Feature 2 — Weighted Spoiler Word Score (`num_occurrence_times_ratio`)

Extended Feature 1 by weighting each word count by its TF-IDF ratio,
giving stronger emphasis to words that are better spoiler predictors.
This accounts for the fact that some spoiler-indicative words are far
more discriminative than others — treating all words equally would
dilute the signal.

![Feature 2 Slide](/imdb/imdb_num_occurence.png)

*Figure 9 — Weighted sum formula: each word scaled by its spoiler-to-non-spoiler TF-IDF ratio*

### Feature 3 — User Historical Spoiler Rate (`user_historical_spoiler_rate`)

Some users consistently post spoilers; others rarely do. This feature
captures each user's proportion of spoiler reviews from the training set.
Unseen users in the test set are assigned the overall training mean as
a fallback. Supported by prior work by Wan et al. on SpoilerNet.

### Feature 4 — Movie Historical Spoiler Rate (`movie_historical_spoiler_rate`)

Some movies — particularly those with iconic twists — generate
disproportionately more spoiler discussion. This feature captures each
movie's historical spoiler rate from the training set. Unseen movies
use the training mean as fallback.

### Feature 5 — Review-Synopsis Cosine Similarity (`cosine_sim_between_review_and_plotsynopsis`)

Spoiler reviews tend to overlap more with the movie's plot synopsis,
since they reference specific plot events. A `TfidfVectorizer` was fitted
on combined training reviews and synopses, then cosine similarity was
computed between each review vector and its synopsis vector.

`cosine_similarity = (A · B) / (||A|| × ||B||)`

![Cosine Similarity Example](/imdb/imdb_cosineexample.png)

*Figure 10 — Spoiler reviews share vocabulary with the synopsis: "Laura eventually killed him" matches "eventually, Laura killed Jason"*

![Cosine Similarity Stats](/imdb/imdb_cosinestat.png)

*Figure 11 — Spoiler reviews have a median cosine similarity of 0.1409 vs 0.0747 for non-spoilers — a strong, consistent signal*

---

## Addressing Class Imbalance

The training set had a 3:1 non-spoiler to spoiler ratio. **SMOTE**
(Synthetic Minority Oversampling Technique) was applied to the training
set only to generate synthetic spoiler examples by interpolating between
existing minority class instances, producing a balanced 1:1 ratio for
training.

---

## Evaluation Metric

Both false negatives (missing a spoiler) and false positives (blocking
a safe review) matter equally to users. We therefore used **macro F1**,
which averages the F1 scores of each class equally, preventing the
majority class from dominating the evaluation.

![Why F1](/imdb/imdb_f1.png)

*Figure 12 — Macro F1 balances the need to catch spoilers without over-flagging safe reviews*

---

## Models

### Tuning Workflow

SMOTE was applied before cross-validation. GridSearchCV with 3-fold CV
was used for all three models, tuning on the resampled training data.

![Tuning Workflow](/imdb/imdb_workflow.png)

*Figure 13 — Pipeline: Raw data → SMOTE resampling → GridSearchCV → Selected Random Forest*

---

### Model 1 — Logistic Regression

A linear baseline tuned over regularisation strength C, penalty type
(L1, L2, ElasticNet), solver, and class weight. Best configuration:
C=5, L1 penalty, saga solver.

**Result:** Macro F1 = 0.745
- Non-spoiler F1 = 0.88, Spoiler F1 = 0.61
- Recall on spoilers = 0.56 — missing 44% of true spoilers

**Feature importance (Logistic Regression):**

![LR Feature Importance](/imdb/imdb_lrfeature.png)

*Figure 14 — User historical spoiler rate dominates; spoiler word count receives a negative coefficient*

The user's known spoiler rate is the most influential feature. Spoiler
word count received a negative weight, suggesting that simply counting
spoiler words is not a reliable signal in a linear model.

**Error analysis:** The model misses short, low-signal spoilers without
obvious trigger phrases (e.g. "he was the killer all along") and falsely
flags safe reviews containing isolated high-weight words like "dies" or
"twist" in hypothetical or negated contexts.

---

### Model 2 — XGBoost

Gradient boosted trees tuned over learning rate, max depth, subsample
ratio, and column subsampling. Does not assume linearity between
predictors and log odds.

**Result:** Macro F1 = 0.745 (same as logistic regression)
- Spoiler recall improved to 0.68 from 0.56 — ~2,300 more spoilers caught
- Spoiler precision dropped to 0.59 — ~3,000 more false positives

**Feature importance (XGBoost):**

![XGB Feature Importance](/imdb/imdb_xgfeature.png)

*Figure 15 — Movie historical spoiler rate ranked highest by XGBoost, unlike logistic regression*

Cosine similarity remained a relatively important feature. Lexical
spoiler-word features remained low, reinforcing that word-count signals
are weak predictors of spoilers across all models.

---

### Model 3 — Random Forest *(Best Model)*

An ensemble of 200 decision trees with max depth 15, capturing nonlinear
relationships and feature interactions. More flexible than logistic
regression; complements XGBoost with different ensemble mechanics.

**After hyperparameter tuning:**
- Non-spoiler: Precision 0.88, Recall 0.87, F1 0.87
- Spoiler: Precision 0.62, Recall 0.64, F1 0.64
- **Macro F1 = 0.755, AUC = 0.815**

![Random Forest Results](/imdb/imdb_rfroc.png)
![Random Forest Results](/imdb/imdb_rfconfusion.png)

*Figure 16 — Random Forest confusion matrix and ROC curve (AUC = 0.815)*

**Feature importance (Random Forest):**

The Random Forest feature importance plot closely mirrors logistic
regression — user historical spoiler rate remains the dominant feature.
Spoiler word features still contribute very little.

![RF Feature Importance](/imdb/imdb_rffeature.png)

*Figure 17 — User historical spoiler rate ranked highest by Random Forests, similar to logistic regression*

**Error analysis:** The model misses subtle spoilers without strong
keywords (e.g. "he was the killer all along"), overreacts to phrases
like "the butler did it" when used jokingly, and struggles with short,
pronoun-heavy reviews. These point to a fundamental limitation of
bag-of-words features — they cannot capture narrative structure,
long-range dependencies, or negation.

---

## Results Summary

| Model | Macro F1 | AUC | Spoiler Recall |
|---|---|---|---|
| Logistic Regression | 0.745 | — | 0.56 |
| XGBoost | 0.745 | — | 0.68 |
| **Random Forest** | **0.755** | **0.815** | **0.64** |

![Problem Statement](/imdb/imdb_modelcomparison.png)

*Figure 18 — Results Summary*

![Problem Statement](/imdb/imdb_roc_all.png)

*Figure 19 — Comparison of ROC Score*

Random Forest achieved the best overall performance. Logistic regression
relies on linear decision boundaries and struggles to capture complex
feature interactions. XGBoost may have overfit the small feature set,
while Random Forest's random feature subsetting helped it generalise
better.

---

## Answering the Problem Statement

- **Problem:** Manual spoiler tagging is unreliable and inconsistent
- **Solution:** Random Forest classifier detecting spoilers automatically across 5 engineered features
- **Outcome:** Consistently accurate spoiler detection across diverse review styles
- **Impact:** Improves user experience and reduces manual moderation effort

---

## Key Takeaways

- **Behavioural signals dominate text signals** — user and movie
  historical spoiler rates are consistently the most important features
  across all three models
- **Cosine similarity is a clean feature** — median similarity of 0.14
  for spoilers vs 0.07 for non-spoilers confirms the hypothesis that
  spoiler text overlaps more with plot synopses
- **Spoiler word features underperform** — simply counting spoiler words
  proves to be a weak signal; the negative coefficient in logistic
  regression suggests word counts may even add noise
- **Data leakage discipline is critical** — all vectorizers and
  historical rates must be fitted on training data only
- **SMOTE meaningfully improves minority class recall** without
  requiring downsampling of the majority class

---

## Future Work

**1. Genre as a feature**

Our EDA found that Sci-Fi (31%) and Horror (30%) have higher spoiler
rates than Musical (20%). While the differences were modest in this
dataset, one-hot encoding genres and including them as features could
improve detection, especially with a larger cross-platform dataset.

**2. Transformer-based embeddings (SBERT)**

Our cosine similarity feature relies on TF-IDF, which only captures
exact keyword matches and misses semantic synonyms — for example,
"dies" versus "passes away". Replacing TF-IDF with Sentence-BERT
(SBERT) embeddings would capture semantic similarity even when
different words describe the same event, significantly improving
the cosine similarity feature's effectiveness.
