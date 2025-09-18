# Siyeb (Lovable AI Starter)

An implementation scaffold of the **Siyeb** compliance platform based on the uploaded spec.
Built with **Next.js (App Router)** + **MongoDB (Mongoose)**. Single app with API routes (no separate server) for simplicity.

## Features (MVP)
- Role-based access control: **Admin, Data Entry, Owner, Compliance Manager, Assessor, Control Owner, Auditor**
- Auth (email + password, JWT-based; attach `role` and `orgId` claims)
- Organizations & Users management (Admin/Owner)
- Frameworks & Assessments (create assessment from a framework)
- Controls & Evidence upload (file upload to local `/uploads` folder)
- Basic dashboards per role (placeholder pages)
- Terms/Policies, Plans, Industries, Cities management (CRUD)
- GitHub Actions CI (lint, typecheck, build)
- Docker support + `docker-compose.yml` for local dev

> This is a **starter**. You can expand endpoints, UI, and validations as needed.

## Getting Started

### 1) Prereqs
- Node.js 18+
- MongoDB (Atlas or local)
- pnpm (recommended) or npm/yarn

### 2) Environment
Copy `.env.example` to `.env.local` and fill values:
```bash
cp .env.example .env.local
```

### 3) Install & run
```bash
pnpm install
pnpm dev
```
Visit http://localhost:3000

### 4) Seed (optional)
Create an initial Admin user:
```bash
pnpm seed
```

### 5) Docker (optional)
```bash
docker-compose up --build
```

## Pushing to GitHub
```bash
git init
git add .
git commit -m "feat: siyeb lovable starter"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Lovable AI Integration
- Import this repo into Lovable.
- Use the **/docs** and code comments for guidance.
- Each diagram from the PDF is mapped to a task list in `/docs/diagrams.md`.

## Notes
- Auth is simplified (no email verification service wired). Replace with your provider if needed.
- File uploads are stored locally; swap to S3/Azure/GCS in production.
- RBAC is middleware-based; expand policies as needed.
