# Error Handling Standard

## Error Categories
- Validation error
- Authentication error
- Authorization error
- Not found
- Conflict
- Rate limit
- Internal server error

## Standard Response
```json
{
  "success": false,
  "message": "You do not have permission to perform this action",
  "code": "FORBIDDEN",
  "requestId": "abc-123"
}
```

## Rules
- Never expose stack traces to clients in production.
- Use stable error codes.
- Log server-side diagnostic information.
- Return field-level validation details where safe.
