# Demo Application: Galaxium Travels

![type:video](./_videos/1-1_demo_scenario_final.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* provides a brief overview of the demo scenario that will tie together the hands-on modules. *[2 min]*

<br/>

## Overview

The demo application used throughout this learning path is **Galaxium Travels**, a fictional luxury space travel booking system. The source code is publicly available on GitHub. All examples and feature implementations in this course are performed against this codebase.

---

## Architecture

Galaxium Travels follows a standard full-stack architecture:

| Layer | Technology |
|-------|------------|
| Frontend | React, TypeScript |
| Backend | Python with REST and MCP interfaces |
| Database | SQLite with seed data |

### Backend

The backend is built around a SQLite database containing:

- Data models defining the domain entities (flights, users, bookings)
- Schemas for data validation and structure
- Seed data for development and testing

The server exposes two interfaces:
- **REST API**: Standard HTTP endpoints for frontend and client consumption
- **MCP interface**: Model Context Protocol interface enabling Bob to interact directly with the backend as a tool

An API browser interface is available locally to explore and interact with the backend endpoints directly, without the frontend. This allows testing operations such as flight retrieval, user registration, and booking.

### Frontend

The React/TypeScript frontend connects to the same backend REST endpoints and presents the data through a user-facing interface. Features available in the frontend include:

- Viewing available flights
- User registration and authentication
- Flight booking

---

## Purpose in This Learning Path

The Galaxium Travels codebase serves as the consistent demonstration target throughout all chapters. Features added to this application across the learning path include:

- Email validation (Chapter 2.1 — Next Edit Prediction)
- Retry logic for API calls (Chapter 2.2 — Literate Coding)
- Seat class tiers: Economy, Business, Galaxium (Chapter 2.3 — Agentic Sidebar)

Using a single, consistent codebase allows the demonstrations to show how Bob interacts with real-world, production-style code rather than isolated snippets.

---

## Key Takeaways

- Galaxium Travels is a full-stack demo application: React/TypeScript frontend, Python backend, SQLite database
- The backend exposes both a REST API and an MCP interface
- The same codebase is used across all chapters, showing Bob working in a realistic project context
- Source code is publicly available on GitHub for independent exploration