# Requirements Traceability Matrix

| Requirement | Design | API/UI | Test |
|---|---|---|---|
| Login | Auth service | POST /auth/login | Login tests |
| User View | User service + RBAC | GET /users | User view tests |
| User Create | User service + RBAC | POST /users | Create tests |
| User Update | User service + RBAC | PUT /users/:id | Update tests |
| User Delete | User service + RBAC | DELETE /users/:id | Delete tests |
| Role Management | Role service | /roles | Role tests |
| Permission Assignment | RBAC service | /roles/:id/permissions | Authorization tests |
| Audit | Audit service | Internal | Audit tests |
