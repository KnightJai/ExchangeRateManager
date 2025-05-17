# 🌐 ExchangeRateManager

A backend service to fetch real-time and historical currency exchange rates, perform conversions, and leverage caching for better performance.

---

## 🚀 Features

- 🔁 Convert amount between currencies
- 🕒 Retrieve historical exchange rates
- ⚡ In-memory caching to boost performance
- 📅 Validates date inputs (only within the last 90 days)
- ✅ Unit-tested with **Jest**
- 🐳 Dockerized for easy deployment

---

## 💱 Supported Currencies

- 🇺🇸 USD (United States Dollar)  
- 🇮🇳 INR (Indian Rupee)  
- 🇪🇺 EUR (Euro)  
- 🇯🇵 JPY (Japanese Yen)  
- 🇬🇧 GBP (British Pound Sterling)

---

## 📦 Installation

```bash
git clone https://github.com/KnightJai/ExchangeRateManager
cd ExchangeRateManager
npm install


## 📦Create a .env file with:

```env
PORT=3000
EXCHANGE_API_URL=http://api.exchangeratesapi.io/v1
ACCESS_KEY=your_access_key_here
CACHE_TTL=3600
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


## 🧪 Run Tests
```
npm test
```

## 📌 Assumptions

## 🙌 Author
Built by Jai Krishna (@KnightJai, jaikrishna0603@gmail.com)