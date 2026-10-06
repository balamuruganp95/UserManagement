# Architecture Decision Records

## ADR-001 React + TypeScript + Vite
**Decision:** Use React with TypeScript and Vite.  
**Reason:** Strong developer experience, fast builds, type safety, and suitable ecosystem.

## ADR-002 Node.js + Express
**Decision:** Use Node.js with Express and TypeScript.  
**Reason:** Aligns frontend/backend language and provides a mature REST API ecosystem.

## ADR-003 MongoDB
**Decision:** Use MongoDB.  
**Reason:** Flexible document model and strong Node.js integration.

## ADR-004 RBAC
**Decision:** Use role-to-permission authorization.  
**Reason:** More flexible and scalable than hardcoding role checks throughout the application.

## ADR-005 Permission Checks on Backend
**Decision:** Backend is the security authority.  
**Reason:** Frontend code can be modified by a client and therefore cannot enforce security by itself.
