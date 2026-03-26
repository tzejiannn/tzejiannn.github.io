var e=`## Getting Started\r
I think everyone has had the idea of making a website at least once in their life. So I decided to give it a shot. I was also in the rat race of finding an Internship / Fulltime position, so I could kill 2 birds with 1 stone by making this website an online, dynamic version of my resume. Showing is alot better than telling.\r
\r
So i started with a concept on MS Paint (the canvas for any great developer)\r
\r
![Concept](/website/website_concept.png)\r
![Concept](/website/website_concept2.png)\r
\r
*The concept art for what I wanted my website to look like*\r
\r
---\r
\r
## Overview\r
\r
This is a fully custom personal portfolio website built from scratch using\r
React and Vite — without any UI component libraries or templates.\r
Designed to showcase my data science and quantitative finance projects.\r
\r
## Tech Stack\r
\r
**React**: Overall architecture. Implemented panel switching,\r
expandable project drawers, and dynamic navigation. State managed\r
with \`useState\` and \`useEffect\` hooks throughout.\r
\r
**Vite**: Build tooling and local development server. Handles JSX\r
compilation, hot module replacement, and production bundling.\r
\r
**React Router**: Client-side routing for individual project and\r
blog post pages, each loading content from dedicated Markdown files\r
via \`react-markdown\`.\r
\r
**CSS**: Custom design system written from scratch. CSS\r
variables control the styling, ie. colours, fonts, spacing, and animation timing.\r
\r
**GitHub Pages**: Static hosting via the \`gh-pages\` npm package. Automated deployment with Github Actions.\r
\r
---\r
\r
## Features\r
\r
- Sliding pill sidebar navigation animated with \`useRef\` and\r
  \`useEffect\`\r
- Expandable project drawers with smooth CSS \`max-height\` transitions\r
- Individual project and blog pages rendered from Markdown files\r
- Cycling word animation on the home page.\r
- KaTeX formula rendering and GitHub Flavored Markdown table support.\r
`;export{e as default};