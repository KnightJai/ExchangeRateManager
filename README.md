# 🌐 ExchangeRateManager

A production-ready backend service to fetch real-time and historical currency exchange rates (including crypto), perform conversions, leverage in-memory caching, monitor with Prometheus, and run with Docker.

---

## 🚀 Features

- 🔁 Convert amounts between fiat currencies
- 🪙 Convert crypto to fiat (BTC, ETH, USDT ➝ USD)
- 🕒 Retrieve historical exchange rates (up to last 90 days)
- ⚡ In-memory caching with expiry (1 hour TTL)
- 🧠 Validates date inputs with proper format checks
- 📊 Prometheus `/metrics` endpoint for monitoring
- 🧪 Unit-tested with **Jest** (100% code coverage)
- 🐳 Dockerized for easy container-based deployment
- ❤️ Clean and modular architecture (routes, controllers, services, utils)

---

## 💱 Supported Currencies

- Fiat: 🇺🇸 USD, 🇮🇳 INR, 🇪🇺 EUR, 🇯🇵 JPY, 🇬🇧 GBP  
- Crypto: 🟠 BTC, 🟣 ETH, 🟡 USDT *(via Coinlayer)*

---

## 📦 Installation

```bash
git clone https://github.com/KnightJai/ExchangeRateManager
cd ExchangeRateManager
npm install
```


## 📦 Create a .env file with:

```env
mail me at jaicreation12@gmail.com to get it
```

## ▶️ Running the Server
```bash
node app.js
```



## 🐳 Running with Docker
```
docker build -t exchange-rate-service .
docker run -p 3000:3000 --env-file .env exchange-rate-service
```

## 🔍 API Endpoints
✅ Convert Currency
```
GET /api/convert?from=USD&to=INR&amount=100
```

✅ Get Historical Rate
```
GET /api/history?from=USD&to=INR&date=2025-04-01
```

✅ Convert Crypto to USD
```
GET /api/crypto-convert?from=BTC&to=USD&amount=1
```

✅  Prometheus Monitoring
```
GET /metrics
```

## 🧪 Run Tests
```
npm test
```
Includes unit tests for:
Date validation
Currency conversion
Crypto conversion
API error handling

## 📌 Assumptions
Only conversions between 5 fiat currencies are supported.

Historical rates are supported for past 90 days only.

Crypto-to-fiat conversions are supported only to USD.

External APIs are used, so valid access keys are required.

## 🙌 Author
Built by Jai Krishna (@KnightJai, jaikrishna0603@gmail.com)
