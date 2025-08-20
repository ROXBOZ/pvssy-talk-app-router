# pvssy talk – Website Remake (V3)

pvssy-talk-app is a partial remake (V3) of [www.pvssy-talk.org](https://www.pvssy-talk.org), a real project developed for a client, this time using **Next.js App Router**, TypeScript, Tailwind CSS, **Sass** (for animation and complex UI), Sanity CMS, Jest, Storybook, GSAP and more.

The goal is to demonstrate **management of Data Fetching in App Router, best practices, senior accessibility practices, disciplined testing, CI/CD and GitHub workflows, Storybook (...)**, while improving usability and design over previous versions.

> **Note:** pvssy talk is a Sex Ed project by Anne-Soorya Takoordyal. I developed the V1 with the MERN (MongoDB, Express, React, Node.js) stack as my graduation project at the Code Academy Berlin in 2023, and the V2 with the JAMStack Next.js, TypeScript, Sanity CMS as a freelancer in 2023-2024. The V2 version is currently online at [pvssy-talk.org](https://pvssy-talk.org). V3 is a demo project and is not meant to be a complete.

⚠️ SANITY PREVIEW CMS : xx
⚠️ STORYBOOK UI : xx



## 💡 Motivation & Project Evolution

The project has evolved through three versions:

- **V1 (MERN stack):** The first working version, with MERN, no CMS, limited scalability.
- **V2 (Next.js Page Router + TypeScript + Sass + Sanity):** A more modern version, but some features were skipped due to funding constraints. Accessibility was implemente. Coding best practices were not mastered.
- **V3 (this version):**
  - **Accessibility:** Going beyond V2, automatized with pa11y and human check with a11y-checklist.md.
  - **Testing:** **Jest** is set up for unit tests.
  - **Sanity & Storybook:** This version will demonstrate integration with Sanity CMS (public in preview mode) and Storybook for UI development.
  - **CI/CD:** Pipeline in progress, including dependency installation, linting, formatting check, project build, unit tests, server start, accessibility tests, type checking, performance audits, and bundle analysis
  - **Copilot rules:** Not yet configured, but planned.
  - **Styling:** This version uses a combination of TailwindCSS for scalability and Sass for complexe features like animations and mixins. A few components might be later fully styled with Sass to demonstrate Sass best practices.
  - **App Router:** First Next.js App. Learning new practices to organize directory and fetch datas.



## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript, JavaScript, Tailwind CSS (main styling), **Sass** (for animation and complex UI)
- **UI Doc:** Storybook
- **CMS:** Sanity 
- **Testing:** Jest
- **Version Control:** GitHub

## Project Status

### ✅ What’s Done

- Next.js App Router, TypeScript, Tailwind, and Sanity CMS (since V2) are set up
- ESLint and Prettier (with Tailwind plugin) are configured
- Some accessibility and UX/UX improvements

### 🟡 What’s In Progress

- Storybook
- Some tests written with Jest
- CI workflow is set up with pa11y for accessibility
- Copilot rules are set for code style, comments, accessibility, and testing
