var e=`## Overview\r
\r
A comprehensive fixed income derivatives toolkit built in Excel and VBA,\r
covering derivative pricing, term structure modelling, and swap valuation\r
using real market data from CME and Global Rates.\r
\r
## The Problem\r
\r
Fixed income derivatives are notoriously complex to price and analyse\r
without expensive Bloomberg terminals or proprietary software. This project\r
set out to build accessible, transparent tooling directly in Excel — the\r
lingua franca of finance — using custom VBA functions.\r
\r
## Data Sources\r
\r
- SOFR Futures rates from CME Group\r
- Historical USD LIBOR rates from Global Rates\r
- 10 years of historical time-series data (2010 onwards)\r
\r
## What I Built\r
\r
Three custom User-Defined Functions (UDFs) in VBA:\r
\r
**1. Derivative Pricing UDF**\r
Implements standard fixed income derivative pricing models directly\r
callable from any Excel cell.\r
\r
**2. Term Structure Modelling UDF**\r
Builds yield curves and forward rate curves from market data inputs,\r
enabling bootstrapping and interpolation across maturities.\r
\r
**3. Swap Valuation UDF**\r
Values interest rate swaps given a notional, fixed rate, floating\r
index, and payment schedule.\r
\r
## Analysis\r
\r
Conducted rigorous time-series analysis on 10 years of historical LIBOR\r
and SOFR data, examining the transition from LIBOR to SOFR following\r
the 2021 cessation. Built forward term structure models to project\r
future rate expectations.\r
\r
## Key Takeaways\r
\r
- VBA is surprisingly powerful for financial modelling when used well\r
- The LIBOR to SOFR transition created significant term structure dislocations\r
- Bootstrapping yield curves from market instruments requires careful\r
  handling of day count conventions and compounding frequencies`;export{e as default};