# 🧹 Community Services API

A simple Node.js + Express backend that lets users submit and discover local services. Admins can approve or delete submissions. Data is stored in Airtable.

---

## 🚀 Features

- Submit a new service (pending approval by default)
- View all approved services
- Search services by title or category
- Approve or delete services (admin)
- RESTful JSON API

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) v14+
- npm

---

## 📂 Setup

```bash
git clone https://github.com/liuba83/community-backend.git
cd community-backend
npm install
```

Create a `.env` file:

```env
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_ENDPOINT_URL=https://api.airtable.com
AIRTABLE_TABLE=services
PORT=3000
```

Start the server:

```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint                    | Description               |
| ------ | --------------------------- | ------------------------- |
| GET    | `/api/services`             | Get all approved services |
| GET    | `/api/services/:id`         | Get service by ID         |
| POST   | `/api/services`             | Create a new service      |
| PATCH  | `/api/services/:id/approve` | Approve a service         |
| PATCH  | `/api/services/:id/deny`    | Deny a service            |
| DELETE | `/api/services/:id`         | Delete a service          |

---

## 🛠 Scripts

| Command          | Description             |
| ---------------- | ----------------------- |
| `npm run dev`    | Start with hot reload   |
| `npm start`      | Start production server |
| `npm run format` | Lint and format code    |
