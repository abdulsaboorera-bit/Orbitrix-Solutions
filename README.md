# Orbitrix Solutions

Official frontend project for Orbitrix Solutions, built with React and Vite.

## Overview

This repository contains a multi-page company website with the following core pages:

- Home
- About
- Contact

The project uses reusable section components (Hero, Services, FAQ, and Map where needed) and a shared layout structure with Header and Footer.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Sass (SCSS)
- Bootstrap 5
- Ant Design
- Font Awesome
- ESLint 9

## Project Structure

```text
src/
	Components/
		Frontend/
			Home/
			About/
			Contact/
		Header/
		Footer/
		Routes.jsx
	App.jsx
	App.scss
	main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/orbitrix-solutions.git
cd orbitrix-solutions
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will run locally on the URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Routing

Application routes are configured under `src/Components/Frontend/index.jsx`:

- `/` -> Home
- `/about` -> About
- `/contact` -> Contact

## Styling

- Global styles are managed with SCSS and CSS files in `src/` and `src/Scss/`.
- Bootstrap is used for layout and utility classes.

## Deployment

Build the project with:

```bash
npm run build
```

The generated production files are in the `dist/` folder and can be deployed to platforms like Netlify, Vercel, GitHub Pages, or any static hosting service.

## License

This project is currently private/internal unless you specify a license in this repository.
