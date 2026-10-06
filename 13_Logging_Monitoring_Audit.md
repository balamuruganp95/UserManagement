# Logging, Monitoring and Audit Specification

## Application Logs
Use structured logs containing:
- timestamp
- level
- service
- requestId
- route
- statusCode
- duration

Do not log:
- passwords
- JWTs
- secrets
- unnecessary personal data

## Health Endpoints
- `/health`
- `/ready`

## Audit Events
Examples:
- LOGIN_SUCCESS
- LOGIN_FAILED
- USER_CREATED
- USER_UPDATED
- USER_DEACTIVATED
- USER_DELETED
- ROLE_CREATED
- ROLE_UPDATED
- ROLE_DELETED
- PERMISSIONS_CHANGED

## Monitoring
Track:
- error rate
- latency
- request volume
- authentication failures
- database connectivity
- resource utilization
