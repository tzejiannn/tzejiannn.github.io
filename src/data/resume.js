// resume.js
// Your work experience and education timeline,
// plus awards, certifications, and activities.

// Timeline entries — shown in order, most recent first
const TIMELINE = [
  {
    // 'work' shows a green dot, 'edu' shows a blue dot
    type: 'work',

    // Date range shown on the left
    period: 'Jan – Jun 2026',

    // Job title or degree name
    role: 'Data Analyst Intern',
    org: 'FreeWheel Comcast · Singapore',
    pts: [
      'Created APAC Revenue Dashboard using Excel, Looker, and SQL',
      'Automated weekly revenue data reporting pipeline',
      'Oversaw all International Marketing campaigns across APAC region (8+ countries)',
    ],
  },

  {
    type: 'edu',
    period: 'Winter 2024',
    role: 'Exchange Student',
    org: 'University of California, Santa Barbara',
    pts: [
      'Coursework in Regressional Analysis, Mathematical Finance and Optimisation',
    ],
  },

  {
    type: 'work',
    period: 'Aug – Dec 2024',
    role: 'Business Analyst Intern',
    org: 'Accenture · Singapore',
    pts: [
      'Resolved 40+ data incidents and supported 10+ deployments using Pega and Excel, strengthening data integrity and minimising operational disruption',
      'Led UAT and stakeholder workshops for 2 high-volume data initiatives, translating business needs into clear requirements and accelerating Agile delivery',
      'Drove user adoption through rapid UI prototyping and standardised documentation, improving system usability and knowledge accessibility',
    ],
  },
  
  {
    type: 'edu',
    period: '2022 – 2026',
    role: 'B.Sc. (Hons) Data Science & Analytics, Minor in Quantitative Finance',
    org: 'National University of Singapore',
    pts: [
      "CAP 4.3 / 5.0",
      'Modules: Numerical Computation, Exploratory Data Analysis, Data Cleaning, Data Visualisation, Data Structures & Algorithms, Machine Learning, Investment Instruments & Risk Management',
      'FYP: "to be included',
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
      'Ultimate Frisbee National Team Youth Program — Team Manager 2023 - Present',
      'NUS Varsity Ultimate Frisbee - Captain 2023/24',
      'Ultimate Frisbee Under-24 National Team - Captain 2022/23',
    ],
  },
]

export { TIMELINE, ASIDE }