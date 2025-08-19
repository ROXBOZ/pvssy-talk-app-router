# pvssy talk – Website Remake (V3)

This project is a complete remake of an existing website, using **Next.js App Router**, TypeScript, Tailwind CSS, and Sanity CMS.

The goal is to demonstrate **best practices, accessibility, testing, CI/CD, and disciplined GitHub workflows**, while improving usability and design over previous versions.

> ⚠️ **Note:** Focus management and some accessibility features are still in progress. Not all focus states and keyboard navigation are implemented yet. Improvements are ongoing.

---

## 💡 Motivation & Project Evolution

The project has evolved through three versions:

- **V1 (MERN stack):** The first working version, heavy, no CMS, limited scalability.
- **V2 (Next.js Page Router + TypeScript + Sass + Sanity):** A more modern version, but some features were skipped due to funding constraints. Accessibility was improved, but best practices, testing, and CI/CD were missing.
- **V3 (this version):**
  - **Accessibility:** Going beyond V2, still a work in progress.
  - **Testing:** **Jest** and Testing Library are set up and in use for unit and integration tests.
  - **CI/CD pipelines:** Not yet implemented, but planned.
  - **GitHub best practices:** The repo is on `main`, but PR/branch workflow and templates are not yet enforced.
  - **Copilot rules:** Not yet configured, but planned.

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **CMS:** Sanity (for content consistency)
- **Testing:** Jest + React Testing Library (working, some coverage)
- **CI/CD:** Planned (not yet implemented)
- **Version Control:** GitHub, with branching and commit practices (manual, not enforced)

---

## Project Status

### ✅ What’s Done

- Next.js App Router, TypeScript, Tailwind, and Sanity CMS are set up
- ESLint and Prettier (with Tailwind plugin) are configured
- Jest and React Testing Library are working, with some tests written
- Some accessibility and UX improvements

### 🟡 What’s In Progress

- Focus management and full keyboard accessibility
- Expanding test coverage for all components and features
- Building out the full component library and pages

### 🔜 What’s Planned

- Add CI/CD (GitHub Actions for linting, testing, deployment)
- Enforce PR/branch workflow and add templates
- Add and enforce Copilot rules for code style, comments, accessibility, and testing
- Complete accessibility and usability improvements
- Add more documentation and contribution guidelines

---

## 🔀 Migration: Switch to Next.js App Router

This version uses the **Next.js App Router** for routing and layouts, replacing the old Page Router. This enables improved routing patterns, layouts, and server components.

---

## 📂 Project Structure

```text
├─ /src/app/components   # Reusable UI components
├─ /src/app              # Next.js App Router pages and layouts
├─ /src/app/styles       # Tailwind & global styles
├─ /src/app/hooks        # React hooks
├─ /config               # Sanity config
├─ /public/fonts         # Custom fonts
├─ /__tests__            # Jest test files
```

---

## 🧪 Testing & CI/CD

- **Jest** and **React Testing Library** are set up and in use for unit and integration tests
- **GitHub Actions** pipeline is planned, but not yet implemented

---

## 🤖 GitHub Copilot Setup & Rules

Copilot rules and settings are planned, but not yet configured. The goal is to enforce code style, comments, accessibility, and testing best practices across the project. Example rules (to be added):

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
