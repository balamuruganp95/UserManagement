# Data Dictionary

| Field | Entity | Type | Required | Description |
|---|---|---|---|---|
| firstName | User | String | Yes | User first name |
| lastName | User | String | Yes | User last name |
| email | User | String | Yes | Unique login email |
| passwordHash | User | String | Yes | One-way password hash |
| roleId | User | ObjectId | Yes | Assigned role |
| status | User | Enum | Yes | ACTIVE/INACTIVE |
| name | Role | String | Yes | Unique role name |
| permissionIds | Role | ObjectId[] | Yes | Assigned permissions |
| name | Permission | String | Yes | Unique permission key |
| resource | Permission | String | Yes | Protected resource |
| action | Permission | String | Yes | Allowed action |
| action | AuditLog | String | Yes | Recorded event |
| createdAt | All | Date | Yes | Creation timestamp |
| updatedAt | User/Role/Permission | Date | Yes | Last update timestamp |
