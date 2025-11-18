# Automated Workflows

## Continuous Integration (CI)

All pushes and pull requests to `main` run automated checks via GitHub Actions:

- **Markdown Lint:** Ensures all markdown files follow style rules.
- **ESLint:** Checks JavaScript/TypeScript code for errors and style issues (if ESLint config exists).
- **Build:** Verifies the project builds successfully.
- **Tests:** Runs tests if a `tests` directory exists.

See `.github/workflows/ci.yml` for details.

## Pre-push Hook

Before pushing to GitHub, Husky runs:

- Markdown lint
- ESLint (if config exists)
- Build
- Tests (if present)

See `.husky/pre-push` for details. To install Husky hooks, run:

```bash
npm run prepare
```
