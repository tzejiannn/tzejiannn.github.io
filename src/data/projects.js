const PROJECTS = [
  {
    num: '01',
    slug: 'fixed-income-derivatives-modeling',
    name: 'Fixed Income Derivatives Modeling',
    tagline: 'Custom VBA/Excel UDFs for derivative pricing, term structure modelling, and swap valuation on historical SOFR and LIBOR data.',
    badge: 'badge-eng',
    badgeLabel: 'Quant Finance',
    year: '2025',
    desc: `Built a comprehensive fixed income derivatives toolkit in Excel and VBA.
Sourced SOFR Futures and historical USD LIBOR rates from CME and Global Rates,
then developed three custom User-Defined Functions covering derivative pricing,
term structure modelling, and swap valuation. Conducted rigorous time-series
and economic analysis on 10 years of historical data alongside forward term
structure models.`,
    metrics: ['3 custom UDFs', '10yr historical data', 'SOFR + LIBOR', 'Forward term structure'],
    stack: ['Excel', 'VBA', 'SOFR Futures', 'CME Data', 'Global Rates'],
    gh: '#',
    demo: null,
  },
  {
    num: '02',
    slug: 'option-market-microstructure-analysis',
    name: 'Option Market Microstructure Analysis',
    tagline: 'Cross-sectional analysis of AAPL options across multiple expiry dates — liquidity, bid-ask spreads, volume, and moneyness.',
    badge: 'badge-ml',
    badgeLabel: 'Data Analysis',
    year: '2025',
    desc: `Used Selenium to automate browser interaction and scrape option chain data
for AAPL across multiple expiry dates. Conducted cross-sectional analysis
focusing on key market microstructure features including liquidity, bid-ask
spreads, volume, open interest, and moneyness. Visualised findings using
Matplotlib to identify patterns across the options surface.`,
    metrics: ['Multiple expiry dates', 'AAPL options', 'Automated scraping', 'Microstructure analysis'],
    stack: ['Python', 'Selenium', 'Pandas', 'Matplotlib'],
    gh: '#',
    demo: null,
  },
  {
    num: '03',
    slug: 'frisbee-object-detection',
    name: 'Frisbee Object Detection',
    tagline: 'Real-time frisbee detection system using a custom-trained YOLOv11 model — built for sport analytics applications.',
    badge: 'badge-nlp',
    badgeLabel: 'Computer Vision',
    year: '2025',
    desc: `Actively developing a real-time frisbee object detection system using
Python, PyTorch, and a custom-trained YOLOv11 model. Curated and refined
a custom dataset of frisbee images across varying lighting conditions,
angles, and backgrounds. Undergoing continuous dataset refinement and
model optimisation to enhance detection accuracy and efficiency for
sport analytics applications.`,
    metrics: ['YOLOv11', 'Custom dataset', 'Real-time detection', 'Ongoing'],
    stack: ['Python', 'PyTorch', 'YOLOv11', 'Computer Vision'],
    gh: '#',
    demo: null,
  },
  {
    num: '04',
    slug: 'optimising-option-pricing',
    name: 'Optimising Option Pricing with Neural Networks',
    tagline: 'PyTorch neural network approximating option prices using SGD optimisation — benchmarked against Black-Scholes.',
    badge: 'badge-ml',
    badgeLabel: 'Machine Learning',
    year: '2025',
    desc: `Engineered a neural network model with PyTorch to approximate option prices,
utilising a stochastic gradient descent optimisation strategy for error
minimisation. Conducted rigorous evaluation of model accuracy by benchmarking
against the Black-Scholes model and observed market prices. Built as part of
coursework at UC Santa Barbara, combining financial theory with deep learning.`,
    metrics: ['SGD optimisation', 'Black-Scholes benchmark', 'PyTorch', 'UCSB coursework'],
    stack: ['Python', 'PyTorch', 'NumPy', 'Matplotlib', 'Black-Scholes'],
    gh: '#',
    demo: null,
  },
  {
    num: '05',
    slug: 'freewheel-apac-data-architecture',
    name: 'APAC Data Architecture — FreeWheel',
    tagline: 'First end-to-end data pipeline for FreeWheel APAC — automated ETL, PowerBI dashboards, cutting manual processing by 75%.',
    badge: 'badge-eng',
    badgeLabel: 'Data Engineering',
    year: '2026',
    desc: `Architected and deployed the first and primary end-to-end data architecture
for FreeWheel's APAC region. Built automated ETL pipelines using Python and
Excel to streamline large-scale data extraction, cleaning, and transformation.
Integrated interactive PowerBI and Looker dashboards to translate complex
datasets into actionable insights for executive leadership. Reduced manual
processing time by 75% across the APAC marketing data workflow.`,
    metrics: ['75% time saved', 'APAC region', 'Automated ETL', 'Executive dashboards'],
    stack: ['Python', 'PowerBI', 'Looker', 'Excel', 'ETL'],
    gh: null,
    demo: null,
  },
]

export default PROJECTS