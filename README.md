# !!!
Forked from https://github.com/clupai8o0/nmmun.
This repo is for 2024-2025 NMMUN.
Since we were rushing the clock, we decided to use the same website as the previous year.


# NMMUN

Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. Engage in debates, draft resolutions, and broaden your horizons. Join us for an educational journey that shapes future leaders. This is a web project for NMMUN, built using Next.js to be aesthetically pleasing, smooth, and SEO friendly. Targeted towards the NMMUN participants, any alterations are to be made only by the IT team of that year's NMMUN after being approved by the Organizing Committee and Design Team.

## Table of Content

- [Prerequisite](#prerequisite)
- [About this project](#about-this-project)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Configurations](#configurations)
- [Components](#components)
- [Layouts](#layouts)
- [Styling](#styling)
- [Animation](#animation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Additional Resources](#additional-resources)
- [Contact Information](#contact-information)

## Prerequisite

- Basic knowledge in HTML, CSS, and JS
- Some knowledge in React.js
- At least one web project
- Completed TODO.md

## About this Project

This project is built using [Next.js](https://nextjs.org/). Though experience in Next.js isn't required as [React.js](https://react.dev/) (or JavaScript) knowledge should be enough to make basic changes. Big changes on the other hand, like adding new pages and routes requires experience in Next.js. In that situation, I would recommend this [tutorial](https://youtu.be/wm5gMKuwSYk?si=9tTceNfV_CIPP4Ka). If you lack experience in React.js as well watch this [tutorial](https://youtu.be/b9eMGE7QtTk?si=-T_NzTsGCF6_wIdH).

## Installation

Download [Git](https://git-scm.com/downloads) & [Node.js](https://nodejs.org/en), and follow the procedure to install them. Once you do, open git bash or any terminal of your choice, in your desired folder, then clone the repo, and install the dependencies.

```
git clone https://github.com/<your username>/nmmun.git
cd nmmun
npm install
```

## Development Setup

Open the folder in your desired code editor. Create a file .env.local ()

```powershell
NEXT_PUBLIC_STATUS=DEVELOPMENT
```

Start the development server

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser

## Project Structure

Main project structure

```powershell
├── /app                # main folder where all pages and content is rendered
├── /components         # the components and layouts to assist content creation
├── /hooks              # react hooks to help
├── /lib                # all the helper functions and configurations
├── /public             # the static content (images)
├── tailwind.config.ts  # color and font configuration
├── README.md           # important information about the project
└── TODO.md             # All the to-dos
```

Main App Directory

```powershell
├── /app
│   ├── /contact      # contact us page
│   ├── /council/id   # individual council page
│   ├── /councils     # councils page
│   ├── /gallery      # gallery page
│   ├── /info         # information page
│   ├── /register     # mun registration page
│   ├── /team         # organizing committee page
│   ├── layout.tsx    # ignore
│   ├── page.tsx      # home page
│   └── global.css    # main css file
└── ...
```

Components Directory

```powershell
├── ...
├── /components
│   ├── /content      # all components that render some content
│   ├── /layouts      # layout components
│   ├── /navigation   # components that assist navigation
│   ├── /typography   # heading and paragraph components
│   └── /ui           # shadcn ui components (leave as it is)
└── ...
```

## Configurations

There are 4 ways to configure content

```powershell
1. /lib/config.ts     # for configuring hero text, banner text, event date, info page content
2. /lib/links.ts      # for configuring the navbar links and the council and team page links & content
3. /lib/metadata.ts   # for configuring the metadata of each page
4. /app/**/page.ts    # configuring the content in each page
```

## Components

Guidelines for creating and organizing components.

## Layouts

Explanation of layout components and their usage.

## Styling

Preferred styling methods and examples.

## Animation

## Deployment

The deployment and domain are entirely up to you. You can either:

1. Deploy the project independently on [Vercel](https://vercel.com/).
2. Contribute changes to this project.

Domain is on [NameCheap](https://namecheap.com/), you need only contact the last Head of IT (check [contact information](#contact-information)) and gain domain access from them (it needs renewal every September 17th).

## Contributing

The NMMUN project source code is built in such a way that you shouldn't have to make any alterations in the components and layouts. The only alterations required should be in the /lib/config.ts file and the individual page styling anc content. I would recommend not altering components and layouts code as much to avoid errors, but if big changes are made please update the README.md and comment your changes when contributing.

## Additional Resources

Don't limit your ideas. If you have a creative vision or idea and don't know how to proceed with it, contact me (Head of IT 2023) or check out the resources below.

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org)
- UI components - [Shad CN](https://ui.shadcn.com/)
- CSS classes - [Tailwind](https://tailwindcss.com/)
- Animations - [Framer Motion](https://www.framer.com/motion/)

Recommended extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Better Components](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Colorful comments
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - Preview markdown code
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Avoid spelling mistakes
- [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode) - My recommended theme

## Contact Information

NMMUN'23 Head of IT - Samridh Limbu
[Github](https://github.com/Clupai8o0)
[Instagram](https://instagram.com/clupai8o0)
Email - limbusamaka@icloud.com
