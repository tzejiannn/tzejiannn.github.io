var e=`## Overview\r
\r
A PyTorch neural network trained to approximate option prices using\r
stochastic gradient descent, benchmarked against the Black-Scholes\r
analytical model and observed market prices.\r
\r
## Background\r
\r
This project was built during my exchange at UC Santa Barbara as part\r
of Mathematical Finance coursework. The core question: can a neural\r
network learn to price options as accurately as Black-Scholes, purely\r
from data?\r
\r
## The Model\r
\r
Built a feedforward neural network in PyTorch with:\r
\r
- Input features: spot price, strike price, time to expiry,\r
  risk-free rate, volatility\r
- Multiple hidden layers with ReLU activations\r
- MSE loss function minimised using stochastic gradient descent\r
- Learning rate scheduling to improve convergence\r
\r
## Training\r
\r
Trained on synthetically generated option pricing data using the\r
Black-Scholes formula as the ground truth, then tested against\r
observed market prices to measure real-world accuracy.\r
\r
## Results\r
\r
The neural network closely approximated Black-Scholes prices across\r
most of the options surface, with larger errors at extreme strikes\r
and very short expiries where the pricing surface is most nonlinear.\r
\r
## Key Takeaways\r
\r
- Neural networks can learn the Black-Scholes surface effectively\r
  with sufficient training data\r
- The model struggles most at the edges of the surface — deep ITM,\r
  deep OTM, and very short-dated options\r
- SGD with learning rate scheduling converged faster than vanilla\r
  gradient descent for this problem\r
- Combining financial domain knowledge with ML leads to better\r
  feature engineering decisions`;export{e as default};