# Playwright + TypeScript E-Commerce Test Suite

This project demonstrates end-to-end web automation using Playwright with TypeScript. The target application is the [LambdaTest E-Commerce Playground](https://ecommerce-playground.lambdatest.io/), a demo site for safe experimentation.
### Features
- Modern, scalable test architecture using TypeScript
- Robust test automation leveraging Playwright
- Page Object Model (POM) for maintainable, reusable selectors and actions
- Custom fixtures to streamline setup for new user flows and authenticated scenarios
- Centralized JSON test data for cleaner test code and easier data management
- ESLint integration to catch code issues and enforce consistent code style early in development
### Design Patterns & Practices
- Page Object Model (POM):
Encapsulates selectors and business logic for each page, improving code clarity and test resilience.
- Custom Fixtures:
Provides tailored browser contexts for new user registration and authenticated user scenarios, minimizing repetitive setup code.
- Externalized Test Data:
All user credentials and variable input values are stored in a dedicated JSON file, enabling data-driven testing and easier updates.
- Linting with ESLint:
Integrated ESLint into the development workflow to automatically detect and prevent code errors and style violations.
### Project Structure
├── pages/              # Page object classes for each application page
├── specs/              # Test files grouped by feature
├── fixtures/           # Custom Playwright fixtures for shared setup
├── data/               # JSON files containing test data
├── .eslintrc.json      # ESLint configuration
├── playwright.config.ts
└── README.md

### Getting Started
1.	Install dependencies
`npm install`
2.	Run tests
`npx playwright test`
3.	Lint code
`npx eslint .`
