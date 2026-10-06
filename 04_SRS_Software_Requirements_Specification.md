# Software Requirements Specification (SRS)

## 1. Purpose
This document consolidates the functional and non-functional software requirements for the RBAC User Management Application.

## 2. System Scope
The system contains:
- React frontend
- Node.js/Express API
- MongoDB database
- Authentication
- RBAC authorization
- User, role, permission, and audit management

## 3. Actors
| Actor | Responsibility |
|---|---|
| Super Admin | Full administration |
| Admin | Administrative operations within assigned permissions |
| User | Normal authenticated usage |

## 4. Core Use Cases
1. Login
2. Logout
3. View dashboard
4. View users
5. Create user
6. Update user
7. Activate/deactivate user
8. Manage roles
9. Assign permissions
10. View profile
11. Review audit records when authorized

## 5. Business Rules
- An inactive user cannot authenticate.
- Every protected API requires authentication.
- Every protected operation requires the required permission.
- Permission checks must be performed server-side.
- A frontend permission check is only a UX control, not a security boundary.
- Email addresses must be unique.
- System-critical roles may not be deleted.
