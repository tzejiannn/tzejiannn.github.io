## Getting Started
I think everyone has had the idea of making a website at least once in their life. So I decided to give it a shot. I was also in the rat race of finding an Internship / Fulltime position, so I could kill 2 birds with 1 stone by making this website an online, dynamic version of my resume. Showing is alot better than telling.

So i started with a concept on MS Paint (the canvas for any great developer)

![Concept](/website/website_concept.png)
![Concept](/website/website_concept2.png)

*The concept art for what I wanted my website to look like*

---

## Overview

This is a fully custom personal portfolio website built from scratch using
React and Vite — without any UI component libraries or templates.
Designed to showcase my data science and quantitative finance projects.

## Tech Stack

**React**: Overall architecture. Implemented panel switching,
expandable project drawers, and dynamic navigation. State managed
with `useState` and `useEffect` hooks throughout.

**Vite**: Build tooling and local development server. Handles JSX
compilation, hot module replacement, and production bundling.

**React Router**: Client-side routing for individual project and
blog post pages, each loading content from dedicated Markdown files
via `react-markdown`.

**CSS**: Custom design system written from scratch. CSS
variables control the styling, ie. colours, fonts, spacing, and animation timing.

**GitHub Pages**: Static hosting via the `gh-pages` npm package. Automated deployment with Github Actions.

---

## Features

- Sliding pill sidebar navigation animated with `useRef` and
  `useEffect`
- Expandable project drawers with smooth CSS `max-height` transitions
- Individual project and blog pages rendered from Markdown files
- Cycling word animation on the home page.
- KaTeX formula rendering and GitHub Flavored Markdown table support.
