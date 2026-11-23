KasiCash AI — Product Requirements Document (PRD)

Product: KasiCash AI
Version: 1.0
Status: Initial Product Specification
Product Type: Fintech SaaS Web Application
Target Market: South African Small Businesses

1. Product Overview

KasiCash AI is an AI-powered financial management platform designed to help small businesses manage their finances, track transactions, monitor invoices and understand their financial performance.

The platform will provide business owners with accessible financial management tools and AI-generated insights to support informed business decisions.

2. Product Vision

To make financial management simpler and more accessible for South African small businesses through technology, automation and artificial intelligence.

3. Problem Statement

Small business owners frequently experience challenges with:

Tracking business income and expenses.

Monitoring cash flow.

Managing customer invoices.

Understanding business profitability.

Maintaining organised financial records.

Making decisions using accurate financial information.

Existing manual processes can be time-consuming and make it difficult for business owners to understand their financial position.

4. Target Users

4.1 Business Owner

The primary user who registers a business and manages its financial information.

Needs:

View business financial performance.

Record income and expenses.

Create and manage invoices.

View financial reports.

Access AI-generated business insights.

4.2 Platform Administrator

The administrator responsible for managing and monitoring the platform.

Needs:

View registered business accounts.

Monitor platform activity.

Manage user accounts.

View aggregated platform statistics.

Manage subscription information.

Administrator access must not automatically grant unrestricted access to private business financial records.

5. Product Objectives

The product aims to:

Simplify financial record-keeping.

Improve business financial visibility.

Reduce manual financial administration.

Help business owners monitor outstanding invoices.

Provide accessible financial analytics.

Introduce AI-powered financial insights.

6. Functional Requirements

FR-01: User Authentication

The application must allow users to:

Register using their email address and password.

Log in securely.

Log out.

Access protected application pages.

Maintain authenticated sessions.

Authentication will be implemented using Supabase Auth.

FR-02: Business Financial Dashboard

The dashboard must display:

Total recorded income.

Total recorded expenses.

Net profit or loss.

Outstanding invoice balances.

Monthly financial summaries.

Revenue and expense charts.

Financial figures must be calculated using actual database records belonging to the authenticated business.

FR-03: Income and Expense Management

Business owners must be able to:

Create financial transactions.

Select income or expense.

Enter transaction descriptions.

Enter transaction amounts.

Select transaction categories.

Record transaction dates.

View transaction history.

Edit and delete their own transactions.

All amounts must be validated as positive monetary values. The transaction type determines whether the amount contributes to income or expenses.

FR-04: Invoice Management

Business owners must be able to:

Create customer invoices.

Enter customer details.

Add invoice descriptions and amounts.

Assign invoice numbers.

Set invoice issue and due dates.

View invoice records.

Update invoice status.

Mark invoices as paid.

Invoice statuses:

Draft.

Sent.

Paid.

Overdue.

Cancelled.

Overdue status should be determined using the due date and payment status.

FR-05: AI Financial Insights

The application should provide AI-generated financial summaries based on the business owner's recorded financial data.

Examples:

Identify increasing expenses.

Highlight monthly revenue changes.

Summarise financial performance.

Identify potential cash flow concerns.

Suggest areas for further business review.

AI insights must:

Use actual business data.

Avoid inventing financial figures.

Clearly identify estimates and assumptions.

Avoid presenting predictions as guaranteed outcomes.

Not replace professional accounting or financial advice.

FR-06: Administrator Dashboard

The platform administrator must be able to:

View registered users.

View business account statistics.

Monitor platform usage.

Manage account status.

View aggregated platform metrics.

Private business financial data must remain protected from unauthorised administrator access.

7. Non-Functional Requirements

Performance

Pages should load efficiently.

Database queries should be optimised.

Charts should handle increasing transaction records.

Security

Secure authentication.

PostgreSQL Row Level Security.

Server-side authorisation.

Input validation.

Protection against unauthorised database access.

Sensitive API keys must never be exposed in frontend code.

Usability

Simple navigation.

Clear financial summaries.

Responsive layouts.

Accessible forms and error messages.

Compatibility

The application must support modern desktop and mobile browsers.

Reliability

Handle database errors gracefully.

Provide meaningful validation messages.

Avoid displaying misleading financial calculations.

8. Proposed Technology Stack

Layer

Technology

Frontend

React

Programming language

TypeScript

Styling

Tailwind CSS

Backend

Supabase

Database

PostgreSQL

Authentication

Supabase Auth

Database security

Row Level Security

AI integration

AI API

Charts

Recharts

Unit testing

Vitest

Component testing

React Testing Library

End-to-end testing

Playwright

CI/CD

GitHub Actions

Deployment

Vercel

Version control

GitHub

9. Initial Database Design

The initial database will contain the following tables:

profiles

id

full_name

email

role

created_at

businesses

id

owner_id

business_name

business_type

created_at

transactions

id

business_id

transaction_type

category

description

amount

transaction_date

created_at

invoices

id

business_id

invoice_number

customer_name

customer_email

description

amount

issue_date

due_date

status

created_at

subscriptions

id

business_id

plan_name

subscription_status

created_at

ai_insights

id

business_id

insight_type

insight_content

generated_at

All business-owned records must be protected through backend-enforced access policies.

10. User Journey

A business owner visits the KasiCash AI landing page.

The owner creates an account.

The owner registers their business.

The owner logs in.

The dashboard displays the business financial overview.

The owner records income and expenses.

The owner creates and manages invoices.

The owner views financial analytics.

The owner requests AI-powered financial insights.

The platform administrator follows a separate authorised login and dashboard journey.

11. MVP Scope

The first release will focus on five must-have features:

Authentication and role-based access.

Financial dashboard.

Income and expense tracking.

Invoice management.

AI financial insights and administrator dashboard.

Features must be implemented end to end, tested and connected to the production database before being considered complete.

12. Acceptance Criteria

A feature will be considered complete when:

Users can successfully authenticate.

Users can only access authorised business records.

Financial transactions persist in PostgreSQL.

Dashboard calculations reflect actual recorded data.

Invoices can be created and updated.

Invoice payment statuses are correctly reflected.

AI insights use the correct business data.

Administrator permissions are enforced.

Application forms validate user input.

Automated tests pass.

The application works on desktop and mobile.

13. Success Metrics

Initial product success will be measured through:

Number of registered businesses.

Number of active users.

Number of recorded transactions.

Number of invoices created.

Percentage of paid invoices.

User retention.

Customer satisfaction.

14. Future Enhancements

Potential future features include:

PDF invoice downloads.

Financial statement exports.

Accounting software integrations.

Automated payment reminders.

Advanced cash flow forecasting.

Business funding readiness reports.

Additional South African payment integrations.

These features are outside the initial MVP unless the core requirements are completed first.

15. Conclusion

KasiCash AI aims to provide small businesses with an accessible financial management platform that combines financial tools, data analytics and artificial intelligence.

This PRD establishes the initial product requirements and serves as the foundation for UI/UX design, technical architecture, development, testing and deployment.
