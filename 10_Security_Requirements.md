# Security Requirements

## Authentication
- Hash passwords using a modern password-hashing algorithm.
- Never log passwords or authentication secrets.
- Enforce password policy.
- Consider secure, HttpOnly cookies for session/token handling.
- Implement token expiration and appropriate renewal strategy.

## Authorization
- Verify identity on every protected request.
- Check permissions server-side.
- Deny by default when permission information is missing.

## API Security
- HTTPS in production.
- CORS allowlist.
- Helmet/security headers.
- Rate limiting on authentication endpoints.
- Input validation and sanitization.
- Protection against NoSQL injection.
- Secure error messages.

## Frontend Security
- Do not treat local storage values as trusted authorization data.
- Do not embed secrets in frontend builds.
- Avoid rendering untrusted HTML.
- Handle token expiration gracefully.

## Audit
Record security-sensitive actions without storing passwords, tokens, or unnecessary sensitive information.
