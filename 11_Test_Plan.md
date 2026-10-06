# Test Plan

## Test Levels
1. Unit testing
2. Component testing
3. API/integration testing
4. End-to-end testing
5. Security testing
6. Performance testing

## Frontend
Tools:
- Vitest
- React Testing Library
- Playwright/Cypress for E2E

Test:
- Login validation
- Protected routes
- Permission-based rendering
- User CRUD
- Role management
- Loading/error states

## Backend
Tools:
- Jest/Vitest
- Supertest

Test:
- Login
- Password verification
- JWT validation
- Permission middleware
- User CRUD
- Role CRUD
- Validation
- Error handling

## Critical Security Cases
- Unauthenticated request -> 401
- Missing permission -> 403
- Invalid token -> 401
- Inactive user -> authentication denied
- Duplicate email -> 409
- Unauthorized delete -> 403

## Exit Criteria
- Critical tests pass.
- No open blocker defects.
- Security-critical authorization paths are covered.
