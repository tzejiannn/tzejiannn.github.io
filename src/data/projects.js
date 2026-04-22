const PROJECTS = [
  
  {
    num: '01',
    slug: 'frisbee-object-detection',
    cover: '/covers/frisbee.jpg',
    name: 'Frisbee Object Detection',
    tagline: 'Custom YOLO26s model trained on a self-built 5.8k+ image dataset — from raw throwing footage to real-time disc detection.',
    badge: 'badge-blue',
    badgeLabel: 'ML / Computer Vision',
    year: 'Ongoing',
    desc: `Built a real-time frisbee detection system from scratch — recorded throwing footage,
            extracted frames with OpenCV, and grew the dataset to 5.8k+ images through augmentation.
            Trained YOLO26s for 100 epochs at 512×512 resolution. Motivated by the complete absence
            of computer vision tooling for Ultimate Frisbee and the need for unsupervised coaching.
            Ongoing work focuses on expanding the dataset and building a full match analysis pipeline.`,
    metrics: ['5.8k+ images', '95.3% Precision', '85.7% Recall', '90.2% mAP'],
    stack: ['Python', 'PyTorch', 'YOLO26s', 'Ultralytics', 'OpenCV', 'Roboflow'],
    gh: '#',
  },
  {
    num: '02',
    slug: 'freewheel-apac-data-architecture',
    cover: '/covers/freewheel.jpg',
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
  },
  {
    num: '03',
    slug: 'website',
    cover: '/covers/portfolio.jpg',
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
    cover: '/covers/options.jpg',
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
    gh: 'https://github.com/tzejiannn/tariff-shock-options-study',
  },
  {
    num: '05',
    slug: 'imdb-spoiler-detection',
    cover: '/covers/imdb.jpg',
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
  },
  {
    num: '06',
    slug: 'fixed-income-derivatives',
    cover: '/covers/fixed-income.jpg',
    name: 'Fixed Income Derivatives Modeling',
    tagline: 'VBA/Excel toolkit for SOFR term structure construction, FRA pricing, and interest rate swap valuation using real market data.',
    badge: 'badge-orange',
    badgeLabel: 'Quant Finance',
    year: '2025',
    desc: `Built a comprehensive fixed income derivatives toolkit in Excel and VBA using
            real market data from CME and historical USD LIBOR rates. Constructed implied
            forward SOFR term structures from 38 quarterly futures contracts, priced 360
            deferred FRA contracts across varying start and tenor combinations, and computed
            one-year interest rate swap rates and tracked their monthly mark-to-market value.
            All pricing implemented via custom VBA User-Defined Functions using the
            actual/360 day count convention.`,
    metrics: ['38 SOFR contracts', '360 FRA rates', '12 LIBOR maturities', 'Actual/360 convention'],
    stack: ['Excel', 'VBA', 'CME SOFR Futures', 'USD LIBOR'],
    report: '/fixed-income-derivatives/JoelAngTzeJian_QF3101AssignmentReport.pdf',
  },



]

export default PROJECTS