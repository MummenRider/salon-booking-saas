# Project Overview

## SaaS Booking Platform for Salons (MVP)

A web-based booking platform that allows hair and beauty salons to manage services, availability, and client bookings online. Clients can easily book appointments through unique salon booking links.

---

## 🚀 Features

### For Salon Owners
- Sign up/login with **email** or via **Gmail/Hotmail OAuth**
- Manage salon profile (logo, name, address, phone, description)
- CRUD operations for services (name, duration, price)
- Set weekly availability and block dates (holidays/time off)
- View, cancel, and reschedule bookings
- Generate and share a unique public booking URL

### For Clients
- Browse salon services and availability
- Book appointments without payment (MVP)
- Receive email confirmations

### For Admin (Planned)
- Dashboard to monitor platform health, active salons, and bookings
- (Future) Revenue analytics and usage insights

---

## 🗺️ SaaS Roadmap

| Phase     | Goals                                                                 |
|-----------|-----------------------------------------------------------------------|
| **Phase 1** | MVP with manual onboarding, basic booking, and email/OAuth login    |
| **Phase 2** | Full SaaS enablement: multi-tenant architecture, self-service signup, subscription management |
| **Phase 3** | Stripe payment integration, advanced analytics, SMS notifications   |
| **Phase 4** | Multilingual support, mobile app (iOS/Android), API integrations    |

---

## 🛠️ Tech Stack

- **Frontend**: NEXT.js  
- **Backend**: NEXT.js (MVP)  
- **Database**: PostgreSQL 
- **Auth**: JWT, OAuth 2.0 (Gmail/Hotmail)  
- **Deployment**: AWS / GCP / Azure (to be decided)

---

This document serves as a high-level summary of the project.  
For implementation details, refer to:
- [Architecture](./architecture.md)
- [API Overview](./api-overview.md)
- [Deployment Guide](./deployment.md)
- [SaaS Roadmap](./saas-roadmap.md)
