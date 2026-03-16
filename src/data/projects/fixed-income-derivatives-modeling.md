## Overview

A comprehensive fixed income derivatives toolkit built in Excel and VBA,
covering derivative pricing, term structure modelling, and swap valuation
using real market data from CME and Global Rates.

## The Problem

Fixed income derivatives are notoriously complex to price and analyse
without expensive Bloomberg terminals or proprietary software. This project
set out to build accessible, transparent tooling directly in Excel — the
lingua franca of finance — using custom VBA functions.

## Data Sources

- SOFR Futures rates from CME Group
- Historical USD LIBOR rates from Global Rates
- 10 years of historical time-series data (2010 onwards)

## What I Built

Three custom User-Defined Functions (UDFs) in VBA:

**1. Derivative Pricing UDF**
Implements standard fixed income derivative pricing models directly
callable from any Excel cell.

**2. Term Structure Modelling UDF**
Builds yield curves and forward rate curves from market data inputs,
enabling bootstrapping and interpolation across maturities.

**3. Swap Valuation UDF**
Values interest rate swaps given a notional, fixed rate, floating
index, and payment schedule.

## Analysis

Conducted rigorous time-series analysis on 10 years of historical LIBOR
and SOFR data, examining the transition from LIBOR to SOFR following
the 2021 cessation. Built forward term structure models to project
future rate expectations.

## Key Takeaways

- VBA is surprisingly powerful for financial modelling when used well
- The LIBOR to SOFR transition created significant term structure dislocations
- Bootstrapping yield curves from market instruments requires careful
  handling of day count conventions and compounding frequencies