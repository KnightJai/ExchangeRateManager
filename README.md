# ExchangeRateManager

A backend service to fetch real-time and historical currency exchange rates, perform conversions, and support caching.

---

## 🚀 Features

- Convert amount between currencies
- Get historical exchange rates
- In-memory caching for better performance
- Date validation (only last 90 days)
- Unit-tested with Jest
- Dockerized for easy deployment

---

## 🧾 Supported Currencies

- USD (United States Dollar)
- INR (Indian Rupee)
- EUR (Euro)
- JPY (Japanese Yen)
- GBP (British Pound Sterling)

---

## 📦 Installation

```bash
git clone https://github.com/KnightJai/ExchangeRateManager
cd ExchangeRateManager
npm install

Create a .env file with
PORT=3000
EXCHANGE_API_URL=https://api.exchangerate.host
CACHE_TTL=3600
ACCESS_KEY=0f0bdf1a86e851c223d8c0554ed6daa2
