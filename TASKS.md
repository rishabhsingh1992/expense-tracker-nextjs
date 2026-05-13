# Pending Tasks

## Backend & API

- [ ] Create `.env.local` with `NEXT_PUBLIC_API_URL` and replace all empty `fetch("")` calls
- [ ] Add Next.js API routes (or connect to FastAPI) for auth, transactions, and budgets
- [ ] Implement sign-in endpoint: validate credentials, return JWT/session token
- [ ] Implement sign-up endpoint: hash password, persist user to DB, return token
- [ ] Add middleware to protect `(dashboard)` routes — redirect unauthenticated users to `/sign-in`
- [ ] Store auth token in httpOnly cookie; clear on sign-out

## Database

- [ ] Add Prisma (or Drizzle) and connect to a database (PostgreSQL recommended)
- [ ] Define schema: `User`, `Transaction`, `Budget`, `Category`
- [ ] Write and run initial migration
- [ ] Seed the database with sample categories and a demo user

## Authentication

- [ ] Complete sign-in form: call real API, store token, redirect to `/dashboard`
- [ ] Complete sign-up form: call real API, redirect to dashboard or email verification
- [ ] Add "Forgot password?" flow (request reset, email link, reset form)
- [ ] Add "Already have an account? Sign in" / "Don't have an account? Sign up" links
- [ ] Add phone number numeric-only enforcement and formatting/masking
- [ ] Add password strength validation (uppercase, number, special character)
- [ ] Add DOB cross-field validation: reject future dates, enforce minimum age of 13

## Core Features

- [ ] Replace mock transaction data in `/transactions` with real API fetch
- [ ] Replace mock dashboard stats with real aggregated data (balance, income, expenses)
- [ ] Replace mock budget data in `/budgets` with real API fetch
- [ ] Wire up "Add Transaction" dialog to POST to API and refresh the list
- [ ] Add "Add Budget" flow (create, set limit, pick category)
- [ ] Add "Edit" and "Delete" actions for transactions
- [ ] Add "Edit" and "Delete" actions for budgets
- [ ] Add transaction filtering by date range and category
- [ ] Add pagination or infinite scroll on the transactions page

## Sign-In / Sign-Up UX

- [ ] Replace `console.log` / `console.error` calls with toast notifications (e.g. `sonner`)
- [ ] Show loading state on form submit buttons
- [ ] Show API error messages inline (invalid credentials, duplicate email, etc.)
- [ ] Add rate-limit / debounce on form submission

## Dashboard UX

- [ ] Make the sidebar collapsible on smaller screens (mobile drawer)
- [ ] Add empty states for when there are no transactions or budgets
- [ ] Add a date/period selector (this month, last month, custom range) to the dashboard
- [ ] Show a spending chart or graph on the dashboard overview

## Landing Page

- [ ] Build out the actual landing page (hero, features, pricing if any)
- [ ] Add working links for Privacy, Terms, and Legal pages

## Settings & Profile

- [ ] Add a `/settings` or `/profile` page
- [ ] Allow user to update name, email, password
- [ ] Add plan/subscription management if applicable (the sidebar shows "Free Plan")

## Tests

- [ ] Add unit tests for Zod schemas (`registrationSchema`, sign-in schema)
- [ ] Add unit tests for utility functions in `lib/utils.ts`
- [ ] Add integration tests for API routes (auth, transactions, budgets)
- [ ] Add E2E tests for sign-in, sign-up, and add-transaction flows (Playwright or Cypress)

## Code Quality

- [ ] Extract API call logic from sign-in/sign-up pages into a dedicated `lib/api.ts` or `services/auth.ts`
- [ ] Remove all remaining `console.log` / `console.error` calls before production
- [ ] Add proper TypeScript types for API response shapes
- [ ] Enable and fix any ESLint warnings

## DevOps / Deployment

- [ ] Set up `.env.example` documenting all required environment variables
- [ ] Configure CI pipeline (GitHub Actions) for lint, type-check, and tests
- [ ] Set up deployment (Vercel, Railway, or similar)
- [ ] Add database connection pooling for production (PgBouncer or Prisma Accelerate)
