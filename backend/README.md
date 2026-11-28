# MamaCare Backend

Express API for the MamaCare community platform.

## Tech

Node.js, Express, MongoDB Atlas (Mongoose), JWT, dotenv, CORS.

## Setup

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and fill in your own values:
   - `PORT`: server port (default 5000)
   - `MONGODB_URI`: your MongoDB Atlas connection string
   - `JWT_SECRET`: a long random string, shared privately with the team
   - `CLIENT_URL`: frontend address (default `http://localhost:5173`)
4. `npm run dev`
5. Open `http://localhost:5000/api/health`. You should see:

```json
{ "success": true, "message": "MamaCare API is running" }
```

Never commit `.env`. It holds private credentials and is ignored by Git.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the server and restarts on file changes |
| `npm start` | Starts the server normally |

## Folder Structure

```
backend/
├── app.js          Express app: middleware, routes, error handlers
├── server.js       Entry point: loads .env and starts the server
├── config/db.js    MongoDB Atlas connection
└── .env.example    Template of required environment variables
```

More folders (`models/`, `controllers/`, `routes/`, `middleware/`) are added as features are built.

## API Response Format

Success: `{ "success": true, "data": ... }`
Error: `{ "success": false, "message": "..." }`

## Endpoints

| Method | Endpoint | Description | Auth | Status |
|---|---|---|---|---|
| GET | `/api/health` | Check the API is running | No | Done |
| GET | `/api/posts` | List posts, newest first | No | Planned |
| POST | `/api/posts` | Create a post | Yes | Planned |

Protected requests send the token as `Authorization: Bearer YOUR_TOKEN`.

## Progress

- [x] Express backend foundation (#29)
- [ ] MongoDB Atlas connection (#30)
- [ ] Setup documentation (#31)
- [ ] Post model
- [ ] Posts endpoints