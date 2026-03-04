var e=`# HDB Resale Price Predictor\r
\r
## Overview\r
\r
Write 2-3 sentences summarising the project here. What problem does it solve,\r
who is it for, and what did you build?\r
\r
## The Problem\r
\r
Describe the problem you were solving. Why does it matter? What gap existed\r
before you built this? Be specific — mention real numbers or context where\r
you can.\r
\r
## The Data\r
\r
Where did your data come from? How much data did you have? What did it look\r
like before cleaning? Mention any interesting quirks or challenges in the\r
dataset.\r
\r
For example:\r
- 50,000+ HDB resale transactions from data.gov.sg\r
- Date range: January 2017 to December 2023\r
- 10 raw columns, expanded to 24 engineered features\r
\r
## My Approach\r
\r
Walk through what you actually did step by step. This is the most important\r
section — it shows how you think.\r
\r
**1. Data cleaning**\r
Describe what you had to fix, remove, or transform.\r
\r
**2. Feature engineering**\r
What new features did you create and why? Which ones turned out to matter most?\r
\r
**3. Modelling**\r
What models did you try? How did you tune them? Why did you choose XGBoost\r
over other options?\r
\r
**4. Evaluation**\r
How did you measure success? What metrics did you use and why?\r
\r
## Results\r
\r
Show your key numbers here. Be specific.\r
\r
- R² of **0.940** on the holdout test set\r
- RMSE of **$28,412**\r
- Most important feature: remaining lease (not floor level as expected)\r
\r
## What I Would Do Differently\r
\r
This section shows maturity. What would you improve if you had more time?\r
What did you learn that you wish you knew at the start?\r
\r
## Links\r
\r
- [GitHub Repository](#)\r
- [Live Streamlit App](#)`;export{e as default};