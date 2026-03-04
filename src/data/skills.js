// skills.js
// Your skill categories and proficiency levels.
// v is your proficiency out of 100 — be honest, recruiters appreciate it.
// To add a skill, add a new { n, v } object inside the skills array.

const SKILL_GROUPS = [
  {
    // Category name shown at top of the card
    name: 'Languages',

    // Emoji shown top right of the card
    icon: '⌨',

    // TODO: Adjust v values to your honest proficiency (0-100)
    skills: [
      { n: 'Python',      v: 92 },
      { n: 'SQL',         v: 80 },
      { n: 'R',           v: 65 },
      { n: 'JavaScript',  v: 52 },
    ],
  },
  {
    name: 'ML / AI',
    icon: '🧠',
    skills: [
      { n: 'scikit-learn / XGBoost', v: 88 },
      { n: 'PyTorch',                v: 70 },
      { n: 'HuggingFace',            v: 72 },
      { n: 'SHAP / Explainability',  v: 82 },
    ],
  },
  {
    name: 'Data & Analytics',
    icon: '📊',
    skills: [
      { n: 'Pandas / NumPy',       v: 92 },
      { n: 'Data Viz (Plotly, D3)', v: 84 },
      { n: 'Tableau',               v: 70 },
      { n: 'PySpark',               v: 55 },
    ],
  },
  {
    name: 'Infra & Tooling',
    icon: '🛠',
    skills: [
      { n: 'Git / GitHub',    v: 86 },
      { n: 'Docker',          v: 60 },
      { n: 'AWS (S3, EC2)',   v: 56 },
      { n: 'Streamlit / Dash', v: 82 },
    ],
  },
]

// Technologies shown as chips below the skill cards
// TODO: Add or remove as appropriate for your background
const BADGES = [
  'TensorFlow', 'Keras', 'FastAPI', 'PostgreSQL', 'MongoDB',
  'Linux', 'Bash', 'NLTK', 'spaCy', 'OpenCV', 'Seaborn',
  'dbt', 'Airflow', 'LaTeX', 'R/ggplot2', 'GeoPandas',
]

export { SKILL_GROUPS, BADGES }