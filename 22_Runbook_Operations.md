# Operations Runbook

## Startup Checks
1. Verify environment configuration.
2. Verify MongoDB connectivity.
3. Start backend.
4. Verify `/health`.
5. Start frontend.
6. Verify login and a basic authorized API.

## Common Incidents

### API unavailable
- Check service status.
- Check logs.
- Check health endpoint.
- Check database connectivity.
- Check recent deployment.

### Login failures
- Check authentication logs.
- Check user status.
- Check database availability.
- Verify environment configuration.

### 403 responses
- Confirm authenticated user.
- Confirm assigned role.
- Confirm role permissions.
- Confirm required permission key.

## Recovery
Follow the approved backup, restore, and rollback procedures. Record incident timeline and corrective action.
