# HDB Resale Price Predictor

## Overview

Write 2-3 sentences summarising the project here. What problem does it solve,
who is it for, and what did you build?

## The Problem

Describe the problem you were solving. Why does it matter? What gap existed
before you built this? Be specific — mention real numbers or context where
you can.

## The Data

Where did your data come from? How much data did you have? What did it look
like before cleaning? Mention any interesting quirks or challenges in the
dataset.

For example:
- 50,000+ HDB resale transactions from data.gov.sg
- Date range: January 2017 to December 2023
- 10 raw columns, expanded to 24 engineered features

## My Approach

Walk through what you actually did step by step. This is the most important
section — it shows how you think.

**1. Data cleaning**
Describe what you had to fix, remove, or transform.

**2. Feature engineering**
What new features did you create and why? Which ones turned out to matter most?

**3. Modelling**
What models did you try? How did you tune them? Why did you choose XGBoost
over other options?

**4. Evaluation**
How did you measure success? What metrics did you use and why?

## Results

Show your key numbers here. Be specific.

- R² of **0.940** on the holdout test set
- RMSE of **$28,412**
- Most important feature: remaining lease (not floor level as expected)

## What I Would Do Differently

This section shows maturity. What would you improve if you had more time?
What did you learn that you wish you knew at the start?

## Links

- [GitHub Repository](#)
- [Live Streamlit App](#)