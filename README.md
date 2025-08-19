# pvssy talk – Website Remake (V3)

This project **will be** a complete remake of an existing website, using **Next.js App Router** (migrated from the old Page Router), TypeScript, Tailwind CSS, and Sanity CMS.
The goal **will be** to demonstrate **best practices, accessibility, testing, CI/CD, and disciplined GitHub workflows**, while improving usability and design over previous versions.

> ⚠️ **Note:** Focus management and some accessibility features **will remain under construction** during early development. Not all focus states and keyboard navigation **will be implemented at first**. Improvements **will be made** in future updates.

---

## 💡 Motivation

The project **will evolve** through three versions:

- **V1 (MERN stack):** The first working version, heavy, no CMS, limited scalability.
- **V2 (Next.js Page Router + TypeScript + Sass + Sanity):** A more modern version, but some features **were skipped due to funding constraints**. Accessibility was improved, but best practices, testing, and CI/CD **were missing**.
- **V3 (this version):** This rebuild **will focus** on:
  - **Accessibility:** The project **will go beyond** V2 to control every interactive element, ARIA attributes, semantic HTML, and contrast ratios. **Focus management will be a work in progress.**
  - **Testing:** **Jest** and testing-library **will be used** for reliable unit and integration tests.
  - **CI/CD pipelines:** Automated builds, linting, and deployments **will be set up**.
  - **GitHub best practices:** Clean commit messages, branch naming conventions, and structured PR reviews **will be followed**.
  - **Copilot rules:** The project **will be configured** to enforce code style, comment clarity, accessibility suggestions, and testing best practices.

---

## 🛠 Planned Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **CMS:** Sanity (for content consistency)
- **Testing:** Jest + React Testing Library
- **CI/CD:** GitHub Actions for linting, testing, and deployment
- **Version Control:** GitHub, with disciplined branching and commit practices
- **Accessibility:** ARIA, semantic HTML, color contrast checks, keyboard navigation

---

## 🚀 Planned Features

- The website **will be fully rebuilt** with improved usability and design.
- **Accessibility-first approach:** The project **will aim to** control every interactive element.
- **GitHub best practices:** Commit messages, branch naming, and pull request templates **will be used**.
- **Copilot integration:** Enforced rules (see below) **will be set up**.
- **Testing coverage:** Critical features **will be covered** with Jest.
- **CI/CD:** Automatic linting, testing, and deployment **will be implemented**.

> Note: Some features **were initially planned in V2** but skipped due to budget constraints — they **will be implemented** in V3. **Focus management and some accessibility features will remain under construction.**

---

## 🔀 Migration: Switch to Next.js App Router

This version **will use** the **Next.js App Router** for routing and layouts, replacing the old Page Router. This **will enable** improved routing patterns, layouts, and server components. See the [Next.js documentation](https://nextjs.org/docs/app) for more details.

---

## 📂 Planned Project Structure

```text
├─ /components   # Reusable UI components
├─ /app          # Next.js App Router pages and layouts
├─ /styles       # Tailwind & global styles
├─ /lib          # Utilities, API clients
├─ /tests        # Jest test files
```

---

## 🧪 Testing & CI/CD (Planned)

- **Jest** will be used for unit and integration tests.
- **React Testing Library** will be used for component testing with accessibility queries.
- **GitHub Actions** pipeline will:
  1. Run **linting**
  2. Run **tests**
  3. Deploy to staging/production if all checks pass

---

## 🤖 GitHub Copilot Setup & Rules (Planned)

GitHub Copilot **will be set up** to apply project-wide best practices and enforce quality rules. This **will help ensure** code consistency, readability, and accessibility throughout the project.

### Planned Steps to Enable

1. Enable Copilot in GitHub settings for this repository.
2. Configure via VSCode or a `.copilot-settings.json` file.
3. Define rules for suggestions and automated guidance.

### Example Rules (to be configured)

```json
{
  "rules": {
    "codeStyle": "consistent",
    "comments": "clear_and_descriptive",
    "accessibility": "aria_checks_enabled",
    "testing": "recommend_testing_best_practices",
    "performance": "suggest_lazy_loading_and_memoization",
    "security": "warn_hardcoded_secrets",
    "ci_cd": "pre_commit_lint_and_test_suggestions"
  }
}
```
