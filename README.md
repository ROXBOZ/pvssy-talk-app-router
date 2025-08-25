# pvssy talk – Website Remake (V3)

pvssy-talk-app is a partial remake (V3) of [www.pvssy-talk.org](https://www.pvssy-talk.org), this time using **Next.js App Router**, TypeScript, Tailwind CSS, **Sass** (for animation and complex UI), Sanity CMS, Jest, Storybook, GSAP and more.

The goal is to demonstrate **management of Data Fetching in App Router, best practices, senior accessibility practices, disciplined testing, CI/CD and GitHub workflows, Storybook (...)**, while improving usability and design over previous versions.

> Note: **pvssy talk** is a sex education project by the No Dolor Association. I developed Version 1 using the MERN stack (MongoDB, Express, React, Node.js) as my graduation project at the Code Academy Berlin in 2023. Shortly after, I developed Version 2 with the JAMstack using Next.js, TypeScript, and Sanity CMS as a freelancer (2023-2024). The V2 site is currently live at pvssy-talk.org. Version 3 is a demo project and is not meant to be a complete application.



## 💡 Goals
**V3 (this version):**
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
