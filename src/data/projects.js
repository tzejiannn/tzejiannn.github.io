const PROJECTS = [
  
  {
    num: '01',
    slug: 'frisbee-object-detection',
    name: 'Frisbee Object Detection',
    tagline: 'Custom YOLOv11 model trained on a self-built 507-image dataset — from raw throwing footage to real-time disc detection.',
    badge: 'badge-blue',
    badgeLabel: 'ML / Computer Vision',
    year: 'Ongoing',
    desc: `Built a real-time frisbee detection system from scratch — recorded throwing
            videos, extracted frames with OpenCV, annotated 507 images on Roboflow, and
            trained YOLOv11 for 100 epochs at 640x640 resolution. Motivated by the complete
            absence of computer vision tooling for Ultimate Frisbee as a sport. Ongoing work
            focuses on expanding the dataset and building a full match analysis pipeline.`,
    metrics: ['507 annotated images', '100 epochs', '640×640 resolution', '1 custom class', 'Ongoing'],
    stack: ['Python', 'PyTorch', 'YOLOv11', 'Ultralytics', 'OpenCV', 'Roboflow'],
    gh: '#',
    demo: null,
  },
  {
    num: '02',
    slug: 'freewheel-apac-data-architecture',
    name: 'FreeWheel APAC Revenue Dashboard',
    tagline: 'Built the first APAC Revenue Dashboard for FreeWheel APAC. Automated ETL, Looker/Excel Dashboards and cut manual processing time by 75%.',
    badge: 'badge-green',
    badgeLabel: 'Data Analytics',
    year: '2026',
    desc: `Architected and deployed the first and primary end-to-end data architecture
            for FreeWheel's APAC region. Built automated ETL pipelines using Python and Excel
            to streamline large-scale data extraction, cleaning, and transformation. Integrated
            interactive PowerBI and Looker dashboards to translate complex datasets into
            actionable insights for executive leadership. Reduced manual processing time by
            75% across the APAC marketing data workflow.`,
    metrics: ['75% time saved', 'First in APAC region', 'Automated ETL', 'Executive Dashboards'],
    stack: ['Python', 'PowerBI', 'Looker', 'Excel', 'ETL'],
    gh: null,
    demo: null,
  },
  {
    num: '03',
    slug: 'website',
    name: 'Personal Portfolio Website',
    tagline: 'Designed and built a fully custom portfolio from scratch using React, Vite, and custom CSS — deployed on GitHub Pages.',
    badge: 'badge-purple',
    badgeLabel: 'Web Development',
    year: '2026',
    desc: `Built a fully custom portfolio website from scratch using React and Vite,
            without any UI component libraries. Features a dark navy design system with a
            sliding pill sidebar navigation, animated panel transitions, expandable project
            drawers, individual project and blog post pages powered by Markdown, and full
            mobile responsiveness. Deployed on GitHub Pages with automated deployment via
            gh-pages.`,
    metrics: ['5 panels', 'React Router', 'Markdown blog', 'Mobile responsive', 'GitHub Pages'],
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'React Router', 'GitHub Pages'],
    gh: 'https://github.com/tzejiannn/tzejiannn.github.io',
    demo: 'https://tzejiannn.github.io',
  },
  {
    num: '04',
    slug: 'option-market-microstructure-analysis',
    name: 'Options Market Microstructure Study: 2025 US Tariff Shock',
    tagline: 'Quantifying liquidity asymmetry and bid-ask spread drivers across 68,000+ option contracts during the 2025 US tariff shock.',
    badge: 'badge-orange',
    badgeLabel: 'Quant Finance x Data Analytics',
    year: '2026',
    desc: `Analysed the impact of the 2025 US tariff shock on options market microstructure 
            across 5 equity tickers and 3 market phases. Built an end-to-end data pipeline 
            automating ingestion of 68,000+ option chain records via REST API, with features 
            engineered and stored in MongoDB Atlas. Applied Mann-Whitney U and Kruskal-Wallis 
            tests to quantify asymmetric liquidity responses, and developed OLS and Random 
            Forest models on 49,000+ contracts to identify primary drivers of bid-ask spread 
            widening — attributing shifts to volatility regime changes and liquidity withdrawal.`,
    metrics: ['68,000+ option contracts', '5 equity tickers', '3 market phases', 'Liquidity asymmetry'],
    stack: ['Python', 'Pandas', 'MongoDB', 'REST API', 'Scikit-learn', 'Matplotlib'],
    gh: '#',
    demo: null,
  },
  {
    num: '05',
    slug: 'imdb-spoiler-detection',
    name: 'IMDb Spoiler Detection',
    tagline: 'ML classifier detecting spoiler reviews across 575k+ IMDb reviews using NLP and behavioural features.',
    badge: 'badge-blue',
    badgeLabel: 'ML / NLP',
    year: '2025',
    desc: `Built a spoiler detection classifier on 575,000+ IMDb reviews combining
            NLP-based text features with behavioural signals. Engineered 5 features including
            TF-IDF spoiler word scoring, review-synopsis cosine similarity, and user/movie
            historical spoiler rates. Benchmarked Logistic Regression, Random Forest, and
            XGBoost with GridSearchCV tuning. Applied SMOTE to address 35% class imbalance
            and used stratified splits with leakage-free feature engineering.`,
    metrics: ['575k+ reviews', '5 engineered features', 'SMOTE', '3 models benchmarked'],
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'TF-IDF', 'spaCy', 'Pandas', 'Seaborn'],
    gh: '#',
    demo: null,
  },
  {
    num: '06',
    slug: 'fixed-income-derivatives-modeling',
    name: 'Fixed Income Derivatives Modeling',
    tagline: 'Custom VBA/Excel UDFs for derivative pricing, term structure modelling, and swap valuation on historical SOFR and LIBOR data.',
    badge: 'badge-orange',
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

  
  
]

export default PROJECTS