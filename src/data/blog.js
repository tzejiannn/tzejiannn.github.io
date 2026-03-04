// blog.js
// Your blog posts shown on the Blog panel.
// To add a post, copy one object and fill in your details.
// Set url to '#' until you have a real link.

const POSTS = [
  {
    // Badge colour — reuses the same badge classes as projects
    // Choose from: 'badge-ml', 'badge-nlp', 'badge-viz', 'badge-eng'
    tag: 'badge-ml',

    // Text inside the badge
    tagLabel: 'Machine Learning',

    // Publication date shown on the right
    date: 'Jan 2025',

    // Estimated reading time
    read: '5 min',

    // Post title
    // TODO: Replace with your real post titles
    title: 'Why SHAP Values Changed How I Present ML Results',

    // One or two sentence summary
    excerpt: "Black-box models don't get adopted. Here's how SHAP made my churn model explainable — and got it shipped.",

    // TODO: Replace with your real post URL
    url: '#',
  },
  {
    tag: 'badge-nlp',
    tagLabel: 'NLP',
    date: 'Nov 2024',
    read: '7 min',
    title: 'Fine-tuning BERT on a Small Dataset: Lessons Learned',
    excerpt: '8k examples and a tight deadline. What bombed, what worked, and how I hit 88% F1.',
    url: '#',
  },
  {
    tag: 'badge-viz',
    tagLabel: 'Data Viz',
    date: 'Sep 2024',
    read: '4 min',
    title: 'Building Interactive Singapore Maps with Plotly',
    excerpt: 'Visualise HDB and demographic data from data.gov.sg in under 50 lines of Python.',
    url: '#',
  },
  {
    tag: 'badge-eng',
    tagLabel: 'MLOps',
    date: 'Jul 2024',
    read: '6 min',
    title: 'From Notebook to API: Deploying a Model with FastAPI',
    excerpt: 'Getting a model out of Jupyter and into a real endpoint. Practical, no fluff.',
    url: '#',
  },
]

export default POSTS