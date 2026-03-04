// resume.js
// Your work experience and education timeline,
// plus awards, certifications, and activities.

// Timeline entries — shown in order, most recent first
const TIMELINE = [
  {
    // 'work' shows a green dot, 'edu' shows a blue dot
    type: 'work',

    // Date range shown on the left
    period: 'May – Aug 2024',

    // Job title or degree name
    role: 'Data Science Intern',

    // Company or university — shown in green
    // TODO: Replace with your real company name
    org: 'Company Name · Singapore',

    // Bullet points — what you actually did
    // TODO: Replace with your real responsibilities and achievements
    pts: [
      'Built XGBoost churn model improving retention campaign targeting by 18%',
      'Automated weekly KPI reporting pipeline — saved ~5 hrs/week',
      'Collaborated on A/B test design for a new feature rollout',
    ],
  },
  {
    type: 'work',
    period: 'Jan – Apr 2024',
    role: 'Research Assistant',
    org: 'NUS School of Computing',
    pts: [
      'Collected and labelled 8,000+ data points for NLP sentiment project',
      'Fine-tuned DistilBERT for 3-class sentiment classification (F1 0.88)',
    ],
  },
  {
    type: 'edu',
    period: 'Fall 2023',
    role: 'Exchange Student',
    org: 'University of Toronto, Canada',
    pts: [
      'Coursework in Advanced ML and Cloud Computing',
    ],
  },
  {
    type: 'edu',
    period: '2022 – 2026',
    role: 'B.Sc. Data Science & Analytics',
    // TODO: Replace with your real university
    org: 'National University of Singapore',
    pts: [
      "CAP 4.3 / 5.0 — Dean's List AY2023/24 Semester 1",
      'Modules: Machine Learning, Big Data Analytics, Statistical Modelling, NLP',
      'FYP: Predicting hawker centre footfall using mobility & weather data',
    ],
  },
]

// Three columns below the timeline
// TODO: Replace all items with your real awards, certs, and activities
const ASIDE = [
  {
    label: 'Awards',
    items: [
      "Dean's List AY2023/24 S1",
      'Shopee DS Competition — Top 20',
      'Orbital — Apollo 11',
    ],
  },
  {
    label: 'Certifications',
    items: [
      'AWS Cloud Practitioner',
      'Google Data Analytics',
      'DeepLearning.AI MLS',
    ],
  },
  {
    label: 'Activities',
    items: [
      'NUS Stats & DS Society Lead',
      'Kaggle Contributor',
      'TA: DSA4199',
    ],
  },
]

export { TIMELINE, ASIDE }