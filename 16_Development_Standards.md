# Development and Coding Standards

## General
- TypeScript strict mode.
- Prefer small, focused modules.
- Use meaningful names.
- Avoid duplicated business logic.
- Keep business logic out of UI components.

## React
- Functional components.
- Custom hooks for reusable behavior.
- Feature-based organization.
- Avoid unnecessary global state.
- Keep API logic outside presentation components.

## Backend
- Routes define HTTP contracts.
- Controllers translate HTTP requests/responses.
- Services contain business logic.
- Models/data-access handle persistence.
- Middleware handles cross-cutting concerns.

## Git
Branch examples:
- feature/user-management
- feature/rbac
- fix/login-validation
- chore/update-dependencies

Commit examples:
- feat: add user creation API
- fix: handle expired token
- test: add RBAC middleware tests
- docs: update API specification
