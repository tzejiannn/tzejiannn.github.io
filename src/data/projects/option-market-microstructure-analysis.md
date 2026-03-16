## Overview

A data-driven analysis of AAPL options market microstructure, using
Selenium to scrape live option chain data and Pandas to analyse
liquidity patterns, pricing anomalies, and volatility surface features.

## The Problem

Options market microstructure — the study of how options are actually
traded and priced in practice — is rarely covered in textbooks.
I wanted to go beyond Black-Scholes and understand how real-world
factors like bid-ask spreads, open interest, and moneyness interact
across the options surface.

## Data Collection

Used Selenium to automate browser interaction and scrape AAPL option
chain data across multiple expiry dates simultaneously. The scraper
handles dynamic page loading, table extraction, and data normalisation
into a clean Pandas DataFrame.

## Analysis

**Liquidity Analysis**
Mapped bid-ask spreads across strikes and expiries to identify where
the market is most and least liquid. Found spreads widen significantly
for deep OTM options and far-dated expiries.

**Volume and Open Interest**
Analysed volume-to-open-interest ratios to identify unusual activity
and potential directional bets by market participants.

**Moneyness Patterns**
Examined how implied volatility varies with moneyness, documenting
the volatility skew and smile patterns across expiry dates.

## Key Takeaways

- Liquidity concentrates heavily at ATM strikes and near-term expiries
- The volatility skew is steeper for shorter-dated options
- Selenium is effective for options data but requires robust error
  handling due to dynamic page structures