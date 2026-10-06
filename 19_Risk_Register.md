# Risk Register

| ID | Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|---|
| R-001 | Token theft | High | Medium | Secure token strategy, HTTPS, expiration |
| R-002 | Incorrect authorization | Critical | Medium | Centralized backend permission middleware + tests |
| R-003 | Password compromise | Critical | Low/Medium | Strong hashing and password policy |
| R-004 | Database failure | High | Low | Backups, monitoring, recovery plan |
| R-005 | Dependency vulnerability | High | Medium | Dependency scanning and updates |
| R-006 | Excessive API traffic | Medium/High | Medium | Rate limiting and monitoring |
| R-007 | Accidental destructive action | High | Medium | Confirmation, audit, soft-delete policy |
