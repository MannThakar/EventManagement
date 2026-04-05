---
This approach ensures code quality, enables safe collaboration, and supports a robust release process.
---

## Challenges & Problem Solving

This project involved solving several real-world challenges to ensure a robust and production-ready solution:

- **Event Overlap Conflict Resolution**: Implemented precise logic to prevent overlapping events, ensuring users cannot create or update events that conflict in time. This required careful validation and user-friendly error handling.
- **Conditional Validation**: Used advanced validation to enforce dynamic rules (e.g., requiring event links only for online events, and locations only for in-person events).
- **State Consistency**: Managed complex state transitions using React Context and reducers, ensuring data integrity across authentication, event CRUD, and filtering.
- **IndexedDB Integration**: Leveraged IndexedDB for persistent event storage, handling async operations and data consistency.
- **Authentication Security**: Designed local authentication with session persistence and route protection, balancing user experience and security.
- **UI/UX Excellence**: Built a modern, responsive UI with Tailwind CSS v4, focusing on usability and accessibility.
- **Code Quality**: Maintained modular, well-documented code with clear commit history, following best practices for TypeScript and Next.js.

---

## Git Branching Strategy

This project follows a Git workflow with three main branches:

- **feature/**: For active development of new features and fixes. Each feature or fix is developed in its own branch (e.g., `feat-fileration`).
- **main**: The stable integration branch. Completed features are merged here after review and testing.
- **staging**: The pre-production branch. Code from `main` is merged into `staging` for final validation before release or deployment.

# Event Management Dashboard

A modern, production-ready Event Management Dashboard built with **Next.js**, **React**, and **TypeScript**. This project demonstrates robust authentication, event CRUD operations, advanced filtering, state management, and form handling—all with a clean, modular architecture.

---

## Features

### 1. Authentication (Local Only)

- **Sign Up & Login**: Secure authentication using `localStorage` and `IndexedDB` for persistent sessions.
- **Session Management**: Maintains login state across page reloads.
- **Route Protection**: Unauthenticated users are redirected to the login screen.

### 2. Event CRUD Operations

- **Event Model**: Each event includes title, description, event type (Online/In-Person), location/event link (conditional), start/end date-time, category, and organizer.
- **Full CRUD**: Create, read, update, and delete events.
- **No Overlapping Events**: Prevents scheduling conflicts with robust time window validation and user-friendly error messages.

### 3. Search, Filter, and Sorting

- **Search**: By event title or description.
- **Filter**: By event type, category, and date range.
- **Sort**: By start date or title.

### 4. State Management

- **React Context API**: Centralized state for authentication, events, and filters.
- **Reducers**: Predictable state transitions for scalable management.

### 5. Form Handling and Validation

- **React Hook Form**: Efficient, scalable form management.
- **Yup**: Schema-based validation, including conditional logic (e.g., event link required for online events).

---

## Technical Stack

- **Next.js** (App Router, file-based routing)
- **React** with **TypeScript**
- **Tailwind CSS v4** for modern, responsive UI
- **IndexedDB** for event storage
- **localStorage** for authentication/session
- **React Context + Reducers** for state management
- **React Hook Form** + **Yup** for forms and validation

---

## Project Structure

```
src/
	app/                # Next.js app router pages (sign-in, sign-up, dashboard, etc.)
	components/         # Reusable UI components (modals, filters, navbar, etc.)
		common/           # Shared UI elements (Button, Input, Dropdown, etc.)
	context/            # React Contexts and reducers for auth, events, filters
	hooks/              # Custom hooks (e.g., useDebounce for search)
	interface/          # TypeScript interfaces for strong typing
	route/              # Route guards (PrivateRoute)
	utils/              # Helpers, constants, messages
database/             # IndexedDB setup and utilities
public/               # Static assets
```

---

## Key Implementation Details

### Custom Hooks

- **useDebounce**: Optimizes search/filter performance by debouncing user input.

### Helpers, Constants, Messages

- **helper.ts**: Utility functions for event validation, date formatting, etc.
- **constant.tsx**: Centralized constants (event types, categories, etc.).
- **message.ts**: User-facing messages and error strings for consistency.

### IndexedDB Integration

- **database/db.ts**: Handles event data storage and retrieval, ensuring persistence and scalability.

### Authentication (Sign In / Sign Up)

- **Sign Up**: Registers users, hashes passwords, and stores credentials locally.
- **Sign In**: Validates credentials, manages session state, and redirects users.

### Dashboard & Layout

- **Dashboard**: Displays events, filters, and CRUD actions in a responsive layout.
- **Layout.tsx**: Consistent structure with Navbar, Sidebar, and content area.

### Next.js & Routing

- **App Router**: Modern file-based routing for clean navigation.
- **PrivateRoute**: Guards protected pages, enforcing authentication.

### Interfaces

- **TypeScript interfaces**: Strong typing for events, users, context state, and more.

### React Context & Reducers

- **Context API**: Manages global state for authentication, events, and filters.
- **Reducers**: Ensure predictable state updates and scalability.

### Tailwind CSS v4

- **Utility-first styling**: Rapid, consistent, and responsive UI development.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/MannThakar/EventManagement.git
cd EventManagement
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

If any environment variables are required, copy `.env.example` to `.env.local` and update as needed.

---

## Documentation

- **Code is modular and well-documented** for easy understanding and extension.
- **Commit messages** are clear and grouped by feature for traceability.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to further customize this README for your repository or add screenshots and demo links!
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## Author

Developed by [Mann Thakar](https://github.com/MannThakar) as an interview practical task.
