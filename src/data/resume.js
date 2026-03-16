// resume.js
// Split into EXPERIENCE and EDUCATION for cleaner display.

const EXPERIENCE = [
  {
    type: 'work',
    period: 'Jan 2026 – Jun 2026',
    role: 'Data Analyst Intern',
    org: 'FreeWheel Comcast · Singapore',
    pts: [
      'Architected and deployed the first end-to-end data architecture for the APAC region using Python, PowerBI, Looker and Excel',
      'Engineered scalable ETL processes reducing manual processing time by 75%',
      'Integrated automated pipelines and interactive dashboards to translate complex datasets into actionable insights for executive leadership',
      'Oversaw all International Marketing data requirements for the APAC region',
    ],
  },
  {
    type: 'work',
    period: 'Aug 2024 – Dec 2024',
    role: 'Business Analyst Intern',
    org: 'Accenture · Singapore',
    pts: [
      'Strengthened data integrity by resolving 40+ incidents and supporting 10+ production deployments using Pega and Excel',
      'Led UAT and stakeholder workshops for 2 high-volume data initiatives, translating business needs into clear requirements',
      'Drove user adoption through rapid UI prototyping and standardised documentation',
    ],
  },
]

const EDUCATION = [
  {
    type: 'edu',
    period: '2022 – 2026',
    role: 'B.Sc. Data Science & Analytics (Honours)',
    org: 'National University of Singapore',
    pts: [
      'CGPA 4.25 — Honours: Distinction',
      'Minor in Quantitative Finance, Faculty of Science',
      'Relevant courses: Data Structures & Algorithms, Machine Learning, Investment Instruments & Risk Management',
      'Expected Graduation: Dec 2026',
    ],
  },
  
  {
    type: 'edu',
    period: 'Dec 2024 – Apr 2025',
    role: 'Student Exchange Program',
    org: 'University of California, Santa Barbara',
    pts: [
      'Relevant courses: Regression Analysis, Mathematical Finance, Optimisation',
    ],
  }
]

const ASIDE = [
  {
    label: 'Awards',
    items: [
      'Honours: Distinction',
      'CGPA 4.25 / 5.0',
      'UCSB Exchange Program',
    ],
  },
  {
    label: 'Certifications',
    items: [
      'Python — Advanced',
      'SQL — Advanced',
      'PowerBI — Intermediate',
    ],
  },
  {
    label: 'Activities',
    items: [
      'Ultimate Frisbee National Team — Team Manager',
      'NUS Varsity Frisbee — Captain 2023/24',
      'U-24 National Team — Captain 2022/23',
    ],
  },
]

export { EXPERIENCE, EDUCATION, ASIDE }