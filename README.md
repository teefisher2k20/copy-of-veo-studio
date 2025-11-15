# RapFlow Studio

The Ultimate Rap Recording and Hip-Hop Collaboration Platform

RapFlow Studio is a next‑gen rap recording experience with community interaction, beat discovery, and collaboration tools — designed for rappers, producers, and hip‑hop enthusiasts.

---

## Key Features

### Choose a Beat

- Access a rich library of free beats across genres
- Discover exclusive instrumentals from top beatmakers
- Favorite beats to record later

### Rap Recording Studio

- Multi‑layer recording with live beat playback
- Studio‑quality audio effects, equalizer, and pitch changer
- Presets and quick mastering chain


### Artist Profile

- Showcase tracks, social links, and stats
- Track plays, likes, comments, and followers

### Top Charts and HOT Feed

- Weekly charts based on plays and likes
- Curated feed of tracks, collabs, and videos

### Contests and Community

- Weekly rap challenges with prizes and features

- Real‑time chat, collabs, and group sessions

---


## Rap Studio With Vocal FX

Step up your rap game with:

- Premium Vocal FX (reverb, compression, EQ)

- Auto‑Tune with key/scale settings
- Presets to emulate popular vocal chains


## Designed for Real Rap Artists

- Focus on creativity, connection, and growth
- Continuous updates to the recording and mixing workflow


---

## Tech Stack

| Layer | Technology | Description |
|---|---|---|
| Frontend | React Native / Expo | Cross‑platform mobile app |
| Backend | Node.js (Express) | REST API and services |
| Database | PostgreSQL + Prisma | Relational data + ORM |
| Auth | Firebase Auth / JWT | Secure login |
| Real‑time | Socket.io | Chat and live collab |
| Audio | WebAudio / FFmpeg | Effects and processing |


---

## Planned Features

- [ ] Beat marketplace for sellers and producers
- [ ] AI‑powered auto‑mix and vocal enhancer
- [ ] Offline recording with beat caching
- [ ] Lyric editor with rhyme suggestions
- [ ] PRO membership with advanced FX
- [ ] Analytics dashboard for tracks
- [ ] Integrations with Spotify/YouTube/SoundCloud

---

## Installation Guide

### Prerequisites

- Node.js ≥ 18.x
- npm or yarn
- PostgreSQL database
- Docker (optional)

### 1) Clone the Repository

```bash
git clone https://github.com/yourusername/rapflow-studio.git

cd rapflow-studio
```

### 2) Install Dependencies

```bash
npm install
# or
yarn install
```

### 3) Configure Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/rapflow
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_key
STORAGE_BUCKET=s3_bucket_or_supabase_url
```

### 4) Run Database Migrations

```bash
npx prisma migrate dev
```

### 5) Launch the Development Server

```bash
npm run dev
```

### 6) Run the Mobile App

```bash
expo start
```

API defaults: <http://localhost:5000>

Expo defaults: <http://localhost:19000>

---

## Project Structure (Example)

```text
rapflow-studio/
├─ mobile-app/
│  ├─ src/
│  │  ├─ screens/
│  │  ├─ navigation/
│  │  ├─ hooks/
│  │  ├─ services/
│  │  └─ assets/
│  ├─ app.json
│  └─ package.json
├─ server/
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  ├─ middlewares/
│  │  └─ index.ts
│  ├─ prisma/schema.prisma
│  ├─ Dockerfile
│  └─ package.json
├─ shared/
│  ├─ types/
│  └─ constants/
├─ tests/
├─ docker-compose.yml
├─ README.md
└─ LICENSE
```

---

## API Endpoints (Sample)

### Auth (`/api/auth`)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/logout` | Invalidate session |
| GET | `/profile` | Get current user |

### Tracks (`/api/tracks`)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | List all tracks |
| GET | `/top` | Top chart tracks |
| GET | `/feed` | Curated HOT feed |
| POST | `/upload` | Upload new song |
| GET | `/:id` | Get track details |
| DELETE | `/:id` | Remove track |


---

## Prisma Commands

```bash
npx prisma migrate dev --name init_schema
npx prisma generate
```

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m "Add amazing feature"`
4. Push: `git push origin feature/amazing-feature`

---

## License

MIT

![GHBanner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

This contains everything you need to run your app locally.

View your app in AI Studio: [ai.studio/apps/drive](https://ai.studio/apps/drive/1D95Df6Q58CKykSg7296jjegn4sf0DANA)

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:

   `npm install`

2. Set `VITE_API_KEY` in [.env.local](.env.local) to your Google AI API key

3. Run the app:

   `npm run dev`

## Production build and CI/CD

- Build locally:

```bash
npm ci
VITE_API_KEY=YOUR_GOOGLE_API_KEY npm run build
npm run preview
```

- Notes:
  - `VITE_API_KEY` is embedded at build time and will be visible in the client bundle. For production security, prefer using Google AI Studio key selection in an embedded context, or proxy requests via a backend.
  - In CI (e.g., GitHub Actions, Vercel, Netlify), set an environment variable named `VITE_API_KEY` and run `npm ci && npm run build`.
  - Static hosting: deploy the `dist/` directory output from `npm run build`.

Example (GitHub Actions job step):

```yaml
- name: Build
  run: |
    npm ci
    npm run build
  env:
    VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
```
