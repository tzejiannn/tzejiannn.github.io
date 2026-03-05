## Overview

A PyTorch neural network trained to approximate option prices using
stochastic gradient descent, benchmarked against the Black-Scholes
analytical model and observed market prices.

## Background

This project was built during my exchange at UC Santa Barbara as part
of Mathematical Finance coursework. The core question: can a neural
network learn to price options as accurately as Black-Scholes, purely
from data?

## The Model

Built a feedforward neural network in PyTorch with:

- Input features: spot price, strike price, time to expiry,
  risk-free rate, volatility
- Multiple hidden layers with ReLU activations
- MSE loss function minimised using stochastic gradient descent
- Learning rate scheduling to improve convergence

## Training

Trained on synthetically generated option pricing data using the
Black-Scholes formula as the ground truth, then tested against
observed market prices to measure real-world accuracy.

## Results

The neural network closely approximated Black-Scholes prices across
most of the options surface, with larger errors at extreme strikes
and very short expiries where the pricing surface is most nonlinear.

## Key Takeaways

- Neural networks can learn the Black-Scholes surface effectively
  with sufficient training data
- The model struggles most at the edges of the surface — deep ITM,
  deep OTM, and very short-dated options
- SGD with learning rate scheduling converged faster than vanilla
  gradient descent for this problem
- Combining financial domain knowledge with ML leads to better
  feature engineering decisions