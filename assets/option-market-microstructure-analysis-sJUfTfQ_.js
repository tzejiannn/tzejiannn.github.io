var e=`## Overview\r
\r
A data-driven analysis of AAPL options market microstructure, using\r
Selenium to scrape live option chain data and Pandas to analyse\r
liquidity patterns, pricing anomalies, and volatility surface features.\r
\r
## The Problem\r
\r
Options market microstructure — the study of how options are actually\r
traded and priced in practice — is rarely covered in textbooks.\r
I wanted to go beyond Black-Scholes and understand how real-world\r
factors like bid-ask spreads, open interest, and moneyness interact\r
across the options surface.\r
\r
## Data Collection\r
\r
Used Selenium to automate browser interaction and scrape AAPL option\r
chain data across multiple expiry dates simultaneously. The scraper\r
handles dynamic page loading, table extraction, and data normalisation\r
into a clean Pandas DataFrame.\r
\r
## Analysis\r
\r
**Liquidity Analysis**\r
Mapped bid-ask spreads across strikes and expiries to identify where\r
the market is most and least liquid. Found spreads widen significantly\r
for deep OTM options and far-dated expiries.\r
\r
**Volume and Open Interest**\r
Analysed volume-to-open-interest ratios to identify unusual activity\r
and potential directional bets by market participants.\r
\r
**Moneyness Patterns**\r
Examined how implied volatility varies with moneyness, documenting\r
the volatility skew and smile patterns across expiry dates.\r
\r
## Key Takeaways\r
\r
- Liquidity concentrates heavily at ATM strikes and near-term expiries\r
- The volatility skew is steeper for shorter-dated options\r
- Selenium is effective for options data but requires robust error\r
  handling due to dynamic page structures`;export{e as default};