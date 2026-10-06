# Database Design

## Collections
- users
- roles
- permissions
- auditLogs

## User
```text
_id
firstName
lastName
email
passwordHash
roleId
status
lastLoginAt
createdAt
updatedAt
```

## Role
```text
_id
name
description
permissionIds[]
createdAt
updatedAt
```

## Permission
```text
_id
name
resource
action
description
createdAt
updatedAt
```

## Audit Log
```text
_id
userId
action
resource
resourceId
ipAddress
userAgent
requestId
createdAt
```

## Recommended Indexes
- users.email unique
- users.roleId
- users.status
- roles.name unique
- permissions.name unique
- auditLogs.userId
- auditLogs.createdAt

## Data Rules
- Email must be normalized.
- Password hash is never returned in API responses.
- Deleted/deactivated records must follow the application's retention policy.
