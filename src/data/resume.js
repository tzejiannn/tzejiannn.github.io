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


const LEADERSHIP = [
  {
    type: 'leadership',
    period: '2023 – Present',
    role: 'Team Manager',
    org: 'Ultimate Frisbee National Team Youth Program',
    pts: [
      'Oversee all logistics, administrative work, and management of players for the National Youth Training Programme',
    ],
  },
  {
    type: 'leadership',
    period: '2024 – 2025',
    role: 'Coach',
    org: 'Eusoff Hall Ultimate Frisbee',
    pts: ['Coached the Eusoff Hall Ultimate Frisbee team to a Championship win at the Inter-Hall Games 2025',
    ],
  },
  {
    type: 'leadership',
    period: '2023 – 2024',
    role: 'Captain',
    org: 'NUS Varsity Ultimate Frisbee',
    pts: [
      'Led the varsity team through the 2023/24 season — training, strategy, and player development',
    ],
  },
  {
    type: 'leadership',
    period: '2022 – 2023',
    role: 'Captain',
    org: 'Ultimate Frisbee Under-24 National Team',
    pts: [
      'Captained the Singapore U-24 National Team at the World Ultimate Under-24 Championships',
    ],
  },
]

export { EXPERIENCE, EDUCATION, LEADERSHIP }