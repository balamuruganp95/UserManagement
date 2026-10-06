# Functional Requirements Document (FRD)

## 1. Authentication
### FR-AUTH-001 Login
The system shall allow a registered active user to log in using email and password.

### FR-AUTH-002 Logout
The system shall allow an authenticated user to log out.

### FR-AUTH-003 Current User
The system shall provide an endpoint to retrieve the authenticated user's profile and effective permissions.

### FR-AUTH-004 Invalid Login
The system shall return a generic authentication error for invalid credentials.

## 2. User Management
### FR-USER-001 List Users
Authorized users shall view a paginated user list.

### FR-USER-002 Create User
Authorized users shall create users with validated profile, role, and status information.

### FR-USER-003 Update User
Authorized users shall update permitted user fields.

### FR-USER-004 Delete User
Authorized users shall delete or deactivate users according to business rules.

### FR-USER-005 Search/Filter
The system shall support user search, filtering, sorting, and pagination.

## 3. Role Management
- Create role.
- View role.
- Update role.
- Delete role where business rules permit.
- Assign permissions to roles.

## 4. Permission Management
- List permissions.
- Create/update permissions when enabled by system policy.
- Assign permissions to roles.

## 5. Authorization
The backend shall verify authentication and required permissions for every protected operation.

## 6. Audit
Security-sensitive actions shall generate audit records containing actor, action, resource, timestamp, and relevant request metadata.

## 7. Validation
Frontend and backend validation shall enforce required fields, formats, allowed values, and business constraints.
