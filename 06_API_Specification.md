# API Specification

## Base URL
`/api`

## Authentication
| Method | Endpoint | Permission |
|---|---|---|
| POST | `/auth/login` | Public |
| POST | `/auth/logout` | Authenticated |
| GET | `/auth/me` | Authenticated |

## Users
| Method | Endpoint | Permission |
|---|---|---|
| GET | `/users` | USER_VIEW |
| GET | `/users/:id` | USER_VIEW |
| POST | `/users` | USER_CREATE |
| PUT | `/users/:id` | USER_UPDATE |
| DELETE | `/users/:id` | USER_DELETE |
| PATCH | `/users/:id/status` | USER_UPDATE |

## Roles
| Method | Endpoint | Permission |
|---|---|---|
| GET | `/roles` | ROLE_VIEW |
| GET | `/roles/:id` | ROLE_VIEW |
| POST | `/roles` | ROLE_CREATE |
| PUT | `/roles/:id` | ROLE_UPDATE |
| DELETE | `/roles/:id` | ROLE_DELETE |
| PUT | `/roles/:id/permissions` | ROLE_PERMISSION_UPDATE |

## Permissions
| Method | Endpoint | Permission |
|---|---|---|
| GET | `/permissions` | PERMISSION_VIEW |
| POST | `/permissions` | PERMISSION_CREATE |
| PUT | `/permissions/:id` | PERMISSION_UPDATE |
| DELETE | `/permissions/:id` | PERMISSION_DELETE |

## HTTP Status Codes
- 200: Success
- 201: Created
- 400: Validation/bad request
- 401: Unauthenticated
- 403: Authenticated but forbidden
- 404: Resource not found
- 409: Conflict
- 429: Rate limited
- 500: Internal server error

## Response Envelope
```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully"
}
```
