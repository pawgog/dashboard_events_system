# Dashboard – Events System App

Web application for monitoring system events displayed in a table view with:
- warning level
- message
- event timestamp
- filtering by warning importance level and date range

The project is split into a frontend and backend with a clear API boundary.

---

## Demo

🔗 **Live demo:**  
[Events system app](https://unrivaled-gnome-c83131.netlify.app/)

---

## Tech Stack

### Frontend
- React + TypeScript
- Vite
- TanStack Query (React Query) for server state management
- Tailwind CSS
- shadcn/ui
- Fetch API

### Backend
- NestJS
- TypeScript
- REST API
- CORS + credentials support

---

## Features

- Display system events in a table
- Event listing with timestamp, importance level and message
- Server-side filtering via query parameters
- Filter events by importance level and date range
- Abortable requests to prevent race conditions
- Predictable error handling for failed API calls
- Clear separation of UI, hooks and API logic


