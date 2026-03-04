// projects.js
// All your project data lives here.
// To add a new project, copy one object and fill in your details.
// To remove a project, delete the whole object including the { }.

const PROJECTS = [
  {
    num: '01',

    // The title shown in the collapsed row
    name: 'HDB Resale Price Predictor',

    // One line summary shown under the title
    tagline: 'End-to-end gradient boosting pipeline on 50k+ HDB transactions, deployed as a live Streamlit app.',

    // Badge colour — choose from: 'badge-ml', 'badge-nlp', 'badge-viz', 'badge-eng'
    badge: 'badge-ml',

    // Text inside the badge
    badgeLabel: 'Machine Learning',

    // Year shown on the right
    year: '2024',

    // Full description shown when the row is expanded
    desc: `Full ML pipeline on 50,000+ HDB transaction records from data.gov.sg.
Engineered 24 features (MRT proximity, floor level, storey range, lease remaining),
tuned hyperparameters with Optuna, and deployed with SHAP per-prediction explanations.
The live Streamlit app lets anyone estimate resale value and see which features drove the price.`,

    // Key results shown as green chips
    metrics: ['R² 0.940', 'RMSE $28k', '50k+ rows', '24 features', 'Live demo'],

    // Technologies used
    stack: ['Python', 'XGBoost', 'Pandas', 'Optuna', 'SHAP', 'Streamlit', 'data.gov.sg'],

    // TODO: Replace with your real GitHub and demo URLs
    // Set demo to null if there is no live demo
    gh: '#',
    demo: '#',
  },
  {
    num: '02',
    name: 'Sentiment Analysis on SG Reddit',
    tagline: 'Fine-tuned DistilBERT on 8k labelled r/singapore posts, with interactive trend dashboard.',
    badge: 'badge-nlp',
    badgeLabel: 'NLP',
    year: '2024',
    desc: `Scraped 10k+ posts from r/singapore using PRAW and hand-labelled 8,000 samples
across three sentiment classes around local policy topics. Fine-tuned DistilBERT with a
custom classification head. Built an interactive Plotly dashboard showing sentiment trends
over time, filterable by topic and date range.`,
    metrics: ['F1 0.879', 'Precision 0.882', '8k labelled', '3 classes'],
    stack: ['Python', 'HuggingFace', 'DistilBERT', 'PRAW', 'Plotly', 'PyTorch'],
    gh: '#',
    demo: null,
  },
  {
    num: '03',
    name: 'Customer Churn Dashboard',
    tagline: 'Churn prediction with SHAP explainability — interactive Dash dashboard for stakeholders.',
    badge: 'badge-eng',
    badgeLabel: 'ML · Dashboard',
    year: '2024',
    desc: `Churn prediction for a telecom dataset (20k customers, 20 features). Uses a
scikit-learn Random Forest with SHAP TreeExplainer for global and per-customer explanations.
The Dash dashboard lets stakeholders filter by risk tier and export at-risk customers.
Improved campaign targeting precision from 42% to 67%.`,
    metrics: ['AUC 0.913', 'Precision@10% 0.67', 'Lift 4.2×', '20k customers'],
    stack: ['Python', 'scikit-learn', 'SHAP', 'Dash', 'SQL', 'PostgreSQL'],
    gh: '#',
    demo: null,
  },
  {
    num: '04',
    name: 'COVID-19 Singapore Visualisation',
    tagline: 'D3 choropleth tracking COVID stats across 55 planning areas. Static, fast, zero backend.',
    badge: 'badge-viz',
    badgeLabel: 'Data Viz',
    year: '2023',
    desc: `Interactive dashboard tracking Singapore COVID-19 stats at planning area granularity
using MOH open data. Python pipeline joins case counts with URA GeoJSON via GeoPandas.
D3.js renders a zoomable choropleth linked to a time-series chart.
Hosted entirely as static files on GitHub Pages.`,
    metrics: ['55 areas', 'Mar 2020–Feb 2023', 'Real MOH data', 'Zero backend'],
    stack: ['D3.js', 'Python', 'GeoPandas', 'MOH Data', 'GitHub Pages'],
    gh: '#',
    demo: '#',
  },
]

export default PROJECTS