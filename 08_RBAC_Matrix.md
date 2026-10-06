# RBAC Permission Matrix

## Permission Naming
`RESOURCE_ACTION`

Examples:
- USER_VIEW
- USER_CREATE
- USER_UPDATE
- USER_DELETE
- ROLE_VIEW
- ROLE_CREATE
- ROLE_UPDATE
- ROLE_DELETE
- ROLE_PERMISSION_UPDATE
- PERMISSION_VIEW

## Initial Matrix
| Permission | Super Admin | Admin | User |
|---|---:|---:|---:|
| USER_VIEW | Yes | Yes | No |
| USER_CREATE | Yes | Yes | No |
| USER_UPDATE | Yes | Yes | No |
| USER_DELETE | Yes | Yes | No |
| ROLE_VIEW | Yes | Yes | No |
| ROLE_CREATE | Yes | Yes | No |
| ROLE_UPDATE | Yes | Yes | No |
| ROLE_DELETE | Yes | No | No |
| ROLE_PERMISSION_UPDATE | Yes | No | No |
| PERMISSION_VIEW | Yes | Yes | No |
| PROFILE_VIEW | Yes | Yes | Yes |
| PROFILE_UPDATE | Yes | Yes | Yes |

## Security Rule
Backend permission checks are authoritative.
