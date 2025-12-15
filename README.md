# 🧹 Community Services API

A web-based community platform that allows individuals and small businesses to advertise their services and allows users to search and discover these services by category or name. This is a simple Node.js + Express app that allows users to submit and retrieve local service listings. Admins can approve or delete submitted services.

---

## 🚀 Features

- Submit a new service (not approved by default)
- View all **approved** services
- Search services by title or category
- Approve or delete services (admin simulation)
- RESTful JSON API

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 📂 Setup & Run

````bash
# Clone the repo
git clone https://github.com/liuba83/community-backend.git
cd community-backend

# Install dependencies
npm install

# Start the server
npm run dev

---

## 🔑 Environment Variables

Create a `.env` file in the project root and add the following:

```text
AIRTABLE_API_KEY=API_KEY
AIRTABLE_BASE_ID=BASE_ID
AIRTABLE_ENDPOINT_URL=ENDPOINT_URL
AIRTABLE_TABLE=TABLE_NAME
PORT=PORT
````

These are required for Airtable integration. You can find your API key and base ID in your Airtable account and API docs.
