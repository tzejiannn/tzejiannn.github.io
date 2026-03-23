# Becoming a Psychic Revenue Wizard

## The Problem
I am currently at Comcast as a Data Analyst Intern, one of the tasks I was issued with was to track daily revenue across multiple streams. This included tracking our progress towards targets, alerting the team whenever there was an unsual dip or spike, and generating revenue forecasts to see if we were on track to hit out targets. I've learnt that when my team’s performance is measured by a hard number, a simple "it looks like we’ll be fine" is not a very reassuring data point. 

## Projections vs. Reality
When I first arrived, the team was using two primary methods to forecast the revnue for the coming days/months/year. While they were quick, they felt more like **projections** rather than true **forecasts**:

1.  **The 7-Day Running Average:** This involved taking the average gross revenue of the last 7 days, multiplying it by the remaining days in the month, and adding it to the current total, followed by an average revenue share multiplier.
2.  **The "Forever Average":** Taking the average daily net revenue from the entire historical period and applying that single number to every single day in the future.

## The Limitation
In the field that I was working in, these methods have a major blind spot.
* **The 7-Day Running Average** is extremely reactive. If any of our revenue streams had a one-day technical glitch or a random traffic spike, the entire month's forecast would "dip" or "spike" mathematically. 
* **The Forever Average** is the opposite. It’s too sluggish. It ignores the fact that a Monday in March looks nothing like a Sunday in August. 

Using these methods in a volatile market felt like trying to drive a car by only looking at the rearview mirror. We weren't accounting for factors like **seasonality**, **revenue shocks**, or **evolving trends**. As a result, our forecasted numbers would always skew from the actual numbers. For the dashboard's forecasting to be of any help to the team, I knew I had to be proactive and find a more robust solution.

---

## Searching for the Right Model
I spent several weeks diving into time-series forecasting to find a model that could actually work with the market data.

### 1. Simple Moving Average (SMA)
The SMA calculates the average of a fixed number of previous data points (like our 7-day window) to predict the next day. While it smooths out fluctuations, it is inherently **reactive**. Because it relies on a trailing average, it will always "lag" behind a sudden change. In my field, where a revenue stream might double its traffic overnight, the SMA is too slow to react.

### 2. Prophet (by Meta)
Prophet is a curve-fitting model that breaks down data into trend, seasonality, and holiday effects. While it is suitable for social media growth or retail (Eg. Christmas or Black Friday), it can be too smooth for daily revenue. Revenue data is often noisy and stochastic, Prophet sometimes struggles to distinguish between a genuine shift and a random one-day spike, this can lead to an overfit on noisy data.

### 3. Neural Networks (N-HITS):
N-HITS is a deep learning model that uses multi-layer networks to learn complex, non-linear relationships. This model can be incredibly powerful but its drawback is that it requires a massive amount of historical data. More importantly, it lacks **interpretability**. If our stakeholders were to ask us "why did the forecast dropped 10%?", we could not simple use the Neural Network to explain it. In a corporate environment, explaining the "why" is as important as being right.

### 4. ARIMA
ARIMA focuses on the internal logic of the data points themselves, defined by three parameters $(p, d, q)$:
* **AutoRegrssion (A / $p$):**: This helps the model recognise that revenue is "sticky", ie. yesterday's performance is a strong predictor for today. It uses the relationship between an observation and a number of lagged observations.
* **Integrated (I / $d$):** Subtracts the previous value from the current value to make the data stationary. This de-trends the data, making it stable so we can see real patterns.
* **Moving Average (MA / $q$):** Uses the dependency between an observation and a residual error from a moving average model. This smooths out dips or spikes, ensuring a one-day anomaly doesn't derail the whole forecast.

### 5. SARIMA
SARIMA takes ARIMA and adds a second set of parameters $(P, D, Q)_s$ specifically for seasonality. 

While ARIMA looks at the relationship between **today and yesterday**, SARIMA looks at the relationship between **today and $s$ days prior.**
* **Seasonality ($s$):** For my use casedaily revenue, I set $s=7$ to represent a weekly comparison
* **The Seasonal Layer:** SARIMA recognizes that a "dip" on a Saturday might not be a crash, it could be a predictable weekly pattern. It removes the weekly noise so the model can see the actual monthly trends

### 6. AutoARIMA
While SARIMA provided the right framework, it could only be used to forecast one revenue stream at a time. I was dealing with 10+ revenue streams so manually finding the perfect $(p, d, q)$ and $(P, D, Q)_s$ for every single stream would have taken too long. AutoARIMA automates this process. It systematically identifies the appriopriate parameters for each revenue stream using a **Stepwise Algorithm**

---

## Why I Ultimately Chose AutoARIMA
I chose AutoARIMA over deeper "Black Box" models (like Neural Networks) or simpler projections for three specific reasons:

* **Scalability:** Given the number of Revnue Streams (which would continue to grow). AutoARIMA allowed me to find the best parameters of every single network utomatically without having to undergo manual hyperparameter tuning for each one.
* **Interpretability:** I've learnt that Stakeholders always want to know the "why". AutoARIMA is based on regression and moving averages, making it easier to explain a dip as a "seasonal correction" rather than a "the AI said so."
* **Robustness to Noise:** Daily Revenue is inherently jittery. The Moving Average ($q$) and Seasonal ($Q$) components of SARIMA/AutoARIMA are specifically designed to smooth out these fluctuations better than a simple moving average.

## The MVP: AutoARIMA
AutoARIMA doesn't just make random guesses. It performs a systematic search through different combinations of parameters. It starts with simple models and gradually adds complexity (increasing $p$ or $q$) to see if the forecast improves.

### 1. The AIC/BIC Score (The "Quality" Filter)
To decide which model is "best," AutoARIMA uses the **Akaike Information Criterion (AIC)**. 
* It looks for the model that explains the most variance in the revenue data while using the fewest possible parameters. 
* This prevents **overfitting**. It ensures we aren't lead astray chasing random noise in the data that do not contribute to meaningful trends.

### 2. Stationarity Testing
Before it even starts searching, AutoARIMA runs statistical tests (like the Augmented Dickey-Fuller test) to determine if the data needs "differencing" ($d$). This ensures the math stays stable even if our revenue is rapidly growing.

---

## The Data Pipeline

Before I could run a single line of AutoARIMA, I had to transform my data into a hierarchical structure. 

### 1. Cleaning the "Noise"
My first task was to strip away the formatting.
* **Numeric Casting:** I stripped the `$` and `,` characters from the revenue columns and converted them into **floats**. 
* **Standardization:** I mapped the data to the "Nixtla" standard format: `ds` (datestamp), `y` (revenue), and `unique_id` (the specific streams).

### 2. Building the Hierarchy with `aggregate`
The data originally contained daily revenue numbers for every revenue stream, meaning we had multiple repeats of dates. I needed to be able to sum up these numbers to generate a daily total.
| Date | Stream Name | Revenue |
| -------- | -------- | -------- |
| Date 1    | Stream 1     | $$$     |
| ...   | ...     | ...     |
| Date 1    | Stream 10     | $$$     |
| Date 2   | Stream 1     | $$$     |
| ...   | ...     | $$$     |
| Date 2    | Stream 10     | $$$     |

Using the `aggregate` function, I transformed the flat list into a pyramid. This function automatically created a new "Total" series by summing up all individual streams for every single day in the table.

### 3. The Parameters `S_df` and `tags`
To ensure the model understood the relationship between a single network and the overall total, I defined two critical components and implemented **MinTrace Reconciliation** with **OLS (Ordinary Least Squares)** to bring it all together.

### The Summation Matrix (`S_df`)
In volatile markets, a "Top-Down" forecast for the whole region and a "Bottom-Up" forecast for individual streams will inevitably disagree. `S_df` is a matrix of 1s and 0s that tells the model exactly how to sum the parts into the whole. It provides the map to find the most accurate "middle ground" that ensures all numbers sum up perfectly.

### The Hierarchy `tags`
Since my final dataset combined both the "Total" and the "Individual Streams" into one large table, the model needed a way to tell them apart.
* **`tags`** act as a dictionary, it labels the parent rows (Total) and child rows (Streams). This allows the reconciliation engine to apply the correct weights to each row during the final adjustment.

## Why This Structure Works
By using linear algebra to reconcile our granular stream-level forecasts with the macro "Total", I ensured that the numbers were consistent and coherent. I avoided running 10+ separate, disconnected forecasts and made the system integrated and coherent. This ensureed that no matter which level of the business my stakeholders are looking at, the data is mathematically consistent.

---

## The Results (Coming Soon...)
I have generated the forecasts for the month. I will be bench marking the model's forecast against the actual forecasts and conduct some EDA on the results. Stay Tuned!


---