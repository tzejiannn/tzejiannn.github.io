var e=`# Becoming a Psychic Revenue Wizard\r
\r
## The Problem\r
I am currently at Comcast as a Data Analyst Intern, one of the tasks I was issued with was to track daily revenue across multiple streams. This included tracking our progress towards targets, alerting the team whenever there was an unsual dip or spike, and generating revenue forecasts to see if we were on track to hit out targets. I've learnt that when my team’s performance is measured by a hard number, a simple "it looks like we’ll be fine" is not a very reassuring data point. \r
\r
## Projections vs. Reality\r
When I first arrived, the team was using two primary methods to forecast the revnue for the coming days/months/year. While they were quick, they felt more like **projections** rather than true **forecasts**:\r
\r
1.  **The 7-Day Running Average:** This involved taking the average gross revenue of the last 7 days, multiplying it by the remaining days in the month, and adding it to the current total, followed by an average revenue share multiplier.\r
2.  **The "Forever Average":** Taking the average daily net revenue from the entire historical period and applying that single number to every single day in the future.\r
\r
## The Limitation\r
In the field that I was working in, these methods have a major blind spot.\r
* **The 7-Day Running Average** is extremely reactive. If any of our revenue streams had a one-day technical glitch or a random traffic spike, the entire month's forecast would "dip" or "spike" mathematically. \r
* **The Forever Average** is the opposite. It’s too sluggish. It ignores the fact that a Monday in March looks nothing like a Sunday in August. \r
\r
Using these methods in a volatile market felt like trying to drive a car by only looking at the rearview mirror. We weren't accounting for factors like **seasonality**, **revenue shocks**, or **evolving trends**. As a result, our forecasted numbers would always skew from the actual numbers. For the dashboard's forecasting to be of any help to the team, I knew I had to be proactive and find a more robust solution.\r
\r
---\r
\r
## Searching for the Right Model\r
I spent several weeks diving into time-series forecasting to find a model that could actually work with the market data.\r
\r
### 1. Simple Moving Average (SMA)\r
The SMA calculates the average of a fixed number of previous data points (like our 7-day window) to predict the next day. While it smooths out fluctuations, it is inherently **reactive**. Because it relies on a trailing average, it will always "lag" behind a sudden change. In my field, where a revenue stream might double its traffic overnight, the SMA is too slow to react.\r
\r
### 2. Prophet (by Meta)\r
Prophet is a curve-fitting model that breaks down data into trend, seasonality, and holiday effects. While it is suitable for social media growth or retail (Eg. Christmas or Black Friday), it can be too smooth for daily revenue. Revenue data is often noisy and stochastic, Prophet sometimes struggles to distinguish between a genuine shift and a random one-day spike, this can lead to an overfit on noisy data.\r
\r
### 3. Neural Networks (N-HITS):\r
N-HITS is a deep learning model that uses multi-layer networks to learn complex, non-linear relationships. This model can be incredibly powerful but its drawback is that it requires a massive amount of historical data. More importantly, it lacks **interpretability**. If our stakeholders were to ask us "why did the forecast dropped 10%?", we could not simple use the Neural Network to explain it. In a corporate environment, explaining the "why" is as important as being right.\r
\r
### 4. ARIMA\r
ARIMA focuses on the internal logic of the data points themselves, defined by three parameters $(p, d, q)$:\r
* **AutoRegrssion (A / $p$):**: This helps the model recognise that revenue is "sticky", ie. yesterday's performance is a strong predictor for today. It uses the relationship between an observation and a number of lagged observations.\r
* **Integrated (I / $d$):** Subtracts the previous value from the current value to make the data stationary. This de-trends the data, making it stable so we can see real patterns.\r
* **Moving Average (MA / $q$):** Uses the dependency between an observation and a residual error from a moving average model. This smooths out dips or spikes, ensuring a one-day anomaly doesn't derail the whole forecast.\r
\r
### 5. SARIMA\r
SARIMA takes ARIMA and adds a second set of parameters $(P, D, Q)_s$ specifically for seasonality. \r
\r
While ARIMA looks at the relationship between **today and yesterday**, SARIMA looks at the relationship between **today and $s$ days prior.**\r
* **Seasonality ($s$):** For my use casedaily revenue, I set $s=7$ to represent a weekly comparison\r
* **The Seasonal Layer:** SARIMA recognizes that a "dip" on a Saturday might not be a crash, it could be a predictable weekly pattern. It removes the weekly noise so the model can see the actual monthly trends\r
\r
### 6. AutoARIMA\r
While SARIMA provided the right framework, it could only be used to forecast one revenue stream at a time. I was dealing with 10+ revenue streams so manually finding the perfect $(p, d, q)$ and $(P, D, Q)_s$ for every single stream would have taken too long. AutoARIMA automates this process. It systematically identifies the appriopriate parameters for each revenue stream using a **Stepwise Algorithm**\r
\r
---\r
\r
## Why I Ultimately Chose AutoARIMA\r
I chose AutoARIMA over deeper "Black Box" models (like Neural Networks) or simpler projections for three specific reasons:\r
\r
* **Scalability:** Given the number of Revnue Streams (which would continue to grow). AutoARIMA allowed me to find the best parameters of every single network utomatically without having to undergo manual hyperparameter tuning for each one.\r
* **Interpretability:** I've learnt that Stakeholders always want to know the "why". AutoARIMA is based on regression and moving averages, making it easier to explain a dip as a "seasonal correction" rather than a "the AI said so."\r
* **Robustness to Noise:** Daily Revenue is inherently jittery. The Moving Average ($q$) and Seasonal ($Q$) components of SARIMA/AutoARIMA are specifically designed to smooth out these fluctuations better than a simple moving average.\r
\r
## The MVP: AutoARIMA\r
AutoARIMA doesn't just make random guesses. It performs a systematic search through different combinations of parameters. It starts with simple models and gradually adds complexity (increasing $p$ or $q$) to see if the forecast improves.\r
\r
### 1. The AIC/BIC Score (The "Quality" Filter)\r
To decide which model is "best," AutoARIMA uses the **Akaike Information Criterion (AIC)**. \r
* It looks for the model that explains the most variance in the revenue data while using the fewest possible parameters. \r
* This prevents **overfitting**. It ensures we aren't lead astray chasing random noise in the data that do not contribute to meaningful trends.\r
\r
### 2. Stationarity Testing\r
Before it even starts searching, AutoARIMA runs statistical tests (like the Augmented Dickey-Fuller test) to determine if the data needs "differencing" ($d$). This ensures the math stays stable even if our revenue is rapidly growing.\r
\r
---\r
\r
## The Data Pipeline\r
\r
Before I could run a single line of AutoARIMA, I had to transform my data into a hierarchical structure. \r
\r
### 1. Cleaning the "Noise"\r
My first task was to strip away the formatting.\r
* **Numeric Casting:** I stripped the \`$\` and \`,\` characters from the revenue columns and converted them into **floats**. \r
* **Standardization:** I mapped the data to the "Nixtla" standard format: \`ds\` (datestamp), \`y\` (revenue), and \`unique_id\` (the specific streams).\r
\r
### 2. Building the Hierarchy with \`aggregate\`\r
The data originally contained daily revenue numbers for every revenue stream, meaning we had multiple repeats of dates. I needed to be able to sum up these numbers to generate a daily total.\r
| Date | Stream Name | Revenue |\r
| -------- | -------- | -------- |\r
| Date 1    | Stream 1     | $$$     |\r
| ...   | ...     | ...     |\r
| Date 1    | Stream 10     | $$$     |\r
| Date 2   | Stream 1     | $$$     |\r
| ...   | ...     | $$$     |\r
| Date 2    | Stream 10     | $$$     |\r
\r
Using the \`aggregate\` function, I transformed the flat list into a pyramid. This function automatically created a new "Total" series by summing up all individual streams for every single day in the table.\r
\r
### 3. The Parameters \`S_df\` and \`tags\`\r
To ensure the model understood the relationship between a single network and the overall total, I defined two critical components and implemented **MinTrace Reconciliation** with **OLS (Ordinary Least Squares)** to bring it all together.\r
\r
### The Summation Matrix (\`S_df\`)\r
In volatile markets, a "Top-Down" forecast for the whole region and a "Bottom-Up" forecast for individual streams will inevitably disagree. \`S_df\` is a matrix of 1s and 0s that tells the model exactly how to sum the parts into the whole. It provides the map to find the most accurate "middle ground" that ensures all numbers sum up perfectly.\r
\r
### The Hierarchy \`tags\`\r
Since my final dataset combined both the "Total" and the "Individual Streams" into one large table, the model needed a way to tell them apart.\r
* **\`tags\`** act as a dictionary, it labels the parent rows (Total) and child rows (Streams). This allows the reconciliation engine to apply the correct weights to each row during the final adjustment.\r
\r
## Why This Structure Works\r
By using linear algebra to reconcile our granular stream-level forecasts with the macro "Total", I ensured that the numbers were consistent and coherent. I avoided running 10+ separate, disconnected forecasts and made the system integrated and coherent. This ensureed that no matter which level of the business my stakeholders are looking at, the data is mathematically consistent.\r
\r
---\r
\r
## The Results (Coming Soon...)\r
I have generated the forecasts for the month. I will be bench marking the model's forecast against the actual forecasts and conduct some EDA on the results. Stay Tuned!\r
\r
\r
---`;export{e as default};