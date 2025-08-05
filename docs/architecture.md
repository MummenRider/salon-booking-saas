# Architecture Overview (MVP)

## System Design
For the MVP, the platform has a simple, single-tenant structure:
- **Frontend**: NEXT.js  
- **Backend**: NEXT.js (MVP)  
- **Database**: PostgreSQL 
- **Auth**: JWT, OAuth 2.0 (Gmail/Hotmail)  


## Data Flow
Client → Frontend → Backend API → Database

## Notes
- Salons are manually onboarded by the platform owner
- OAuth and multi-tenancy will be added in future phases
