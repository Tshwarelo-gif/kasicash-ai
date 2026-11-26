KasiCash AI

Know your numbers. Grow your business.

KasiCash AI is a financial management web application concept designed to help small businesses and entrepreneurs manage their finances more effectively.

1. The Problem

Many small businesses struggle to keep accurate financial records, monitor income and expenses, track unpaid invoices and understand their financial performance.

Limited access to simple and affordable financial management tools can make it difficult for business owners to make informed decisions.

2. The Solution

KasiCash AI aims to provide a central platform where small business owners can manage financial information, monitor business performance and, in future iterations, receive AI-powered financial insights.

The project focuses on making financial management more accessible and understandable for small businesses.

3. Current Features

The current MVP includes:

User registration and login.

Supabase authentication and session management.

Business registration form.

Business dashboard interface.

Financial summary cards.

Income and expense presentation.

Invoice overview interface.

Financial chart visualisation.

Illustrative AI financial insight card.

User logout functionality.

Implementation note: Some dashboard figures, transactions, invoices and insights currently use demonstration data. They are not yet connected to complete live financial workflows.

4. Technology Stack

Technology

Purpose

React

Frontend user interface

TypeScript

Application development and type checking

Vite

Development server and production build

Tailwind CSS

Styling and responsive layouts

Supabase

Authentication and PostgreSQL database

Recharts

Financial data visualisation

Lucide React

Interface icons

Git and GitHub

Version control and source code management

5. Project Structure

kasicash-ai/
├── docs/
│   ├── designs/
│   └── PRD.md
├── src/
│   ├── lib/
│   │   └── supabase.ts
│   ├── App.tsx
│   └── index.css
├── BUSINESS.md
├── IMPLEMENTATION_PLAN.md
├── README.md
├── package.json
└── vite.config.ts

6. Getting Started

Prerequisites

Node.js

npm

Git

A Supabase project

Clone the repository

git clone https://github.com/Tshwarelo-gif/kasicash-ai.git
cd kasicash-ai

Install dependencies

npm install

Configure environment variables

Create a .env.local file in the project root:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key

Use your own Supabase project URL and publishable key. Never expose a Supabase service-role or secret key in frontend code.

Start the development server

npm run dev

Open the local URL displayed in your terminal, usually:

http://localhost:5173

Build for production

npm run build

7. Database and Backend

The application uses Supabase for authentication and PostgreSQL data storage.

The project database includes tables for:

User profiles

Businesses

Business members

Transactions

Invoices

Invoice items

AI insights

Subscriptions

Row Level Security is enabled on the configured database tables. The policies still require a full security review before production use.

A fresh installation also requires the corresponding Supabase database schema and authentication configuration.

8. Development Status

Implemented

React and TypeScript application setup.

Supabase client configuration.

User registration and login.

Authentication session handling.

Logout.

Business registration interface and database insert logic.

Dashboard interface and chart visualisation.

Production build.

Planned / In Progress

Loading and displaying the existing business after login.

Persisting and retrieving actual financial transactions.

Transaction creation, editing and deletion.

Complete invoice management.

Live financial calculations from database records.

AI-generated financial insights using actual business data.

Automated application testing.

Full database security and access-policy review.

9. Future Development

Future versions aim to introduce more advanced financial reporting, AI-assisted financial analysis, improved invoice management, business performance monitoring and additional user roles.

10. Repository

GitHub: https://github.com/Tshwarelo-gif/kasicash-ai

KasiCash AI — Know your numbers. Grow your business.