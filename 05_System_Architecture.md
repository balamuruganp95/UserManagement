# System Architecture Document

## 1. High-Level Architecture

```text
Browser
  |
  v
React + TypeScript
  |
  | HTTPS / REST
  v
Node.js + Express
  |
  +--> Authentication Middleware
  |
  +--> Authorization / Permission Middleware
  |
  +--> Controllers
  |
  +--> Services
  |
  +--> Data Access
  |
  v
MongoDB
```

## 2. Frontend
- React
- TypeScript
- Vite
- React Router
- Redux Toolkit / RTK Query
- React Hook Form
- Zod
- Axios or fetch

## 3. Backend
- Node.js
- Express.js
- TypeScript
- MongoDB/Mongoose
- JWT
- Password hashing
- Validation middleware

## 4. Authorization Flow

```text
Request
 -> Authenticate JWT
 -> Resolve user
 -> Resolve effective permissions
 -> Check required permission
 -> Controller
 -> Service
 -> Database
```

## 5. Deployment
Frontend and backend should be deployable independently behind HTTPS. Configuration must be environment-specific.
