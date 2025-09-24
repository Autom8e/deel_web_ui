# Copilot Instructions for deel_web_ui

This project is a Playwright-based UI test suite for the "Automation Exercise" demo site. It uses TypeScript and Playwright's test runner, with custom page object models and CI integration.

## Architecture Overview
- **Tests** are located in `tests/` and use Playwright's test runner (`@playwright/test`).
- **Page Object Models** are in `models/` (e.g., `HomePage.ts`). These encapsulate UI interactions and selectors for maintainability.
- **Configuration** is managed in `playwright.config.ts`, which sets up test directories, parallelism, retries, reporting, and browser/device targets.
- **Reports** are generated in `playwright-report/` after test runs.

## Developer Workflows
- **Run all tests locally:**
  ```sh
  npx playwright test
  ```
- **Run a specific test file:**
  ```sh
  npx playwright test tests/shopping_2.spec.ts
  ```
- **View HTML test report:**
  ```sh
  npx playwright show-report
  ```
- **Lint code:**
  ```sh
  npm run lint
  npm run lint:fix
  ```
- **CI/CD:**
  - GitHub Actions workflow is defined in `.github/workflows/playwright.yml`.
  - Tests run in a Playwright Docker container on pushes to `master`.

## Project-Specific Patterns & Conventions
- **Page Object Pattern:**
  - All page interactions should be encapsulated in classes under `models/`.
  - Example: `HomePage.ts` provides methods like `goto()`, `addProduct()`, and `navigateCartPageFromPopup()`.
- **Selectors:**
  - Prefer Playwright's role-based and text-based selectors for robustness (e.g., `getByRole`, `getByText`).
  - Use `data-product-id` for product-specific actions.
- **Test Structure:**
  - Tests do not use `beforeEach`; setup is done inline for clarity.
  - Use Playwright's `expect` for assertions.
- **Reporting:**
  - Default reporter is `html`. Artifacts are uploaded in CI for 30 days.
- **TypeScript:**
  - All code is written in TypeScript. Type definitions for Playwright and Node are included.

## External Dependencies
- **Playwright** for browser automation and testing.
- **Allure** (optional, configured in devDependencies) for advanced reporting.
- **ESLint** for linting, with Playwright and TypeScript plugins.

## Key Files & Directories
- `tests/` — Test specs
- `models/` — Page object models
- `playwright.config.ts` — Playwright configuration
- `.github/workflows/playwright.yml` — CI workflow
- `playwright-report/` — Test reports

---

For questions or missing conventions, ask for clarification or review recent test files and page models for current patterns.
