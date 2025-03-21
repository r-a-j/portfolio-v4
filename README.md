# My Portfolio Project

**Live:** [View here](https://www.rajpawar.in/)

![Home Page View](https://raw.githubusercontent.com/r-a-j/portfolio-v4/master/public/HomePageView.png)

## Overview

This project uses **Angular** with **standalone components** (no `NgModule`), along with **Tailwind CSS** and **SCSS** for styling. This setup streamlines component creation and offers powerful utility-first styling.

## Prerequisites

-   **Node.js** (version 16+ is recommended)
-   **Angular CLI** (globally installed):
    
    ```bash
    npm install -g @angular/cli
    
    ```
    
-   **Tailwind CSS** (configured via `tailwind.config.js` and integrated in the build process)

## Installation

1.  **Clone or download** this repository.

    ```bash
    git clone https://github.com/r-a-j/portfolio-v4.git
    cd portfolio-v4
    
    ```

2.  **Install dependencies**:
    
    ```bash
    npm install
    
    ```

## Development server

1.  Run the dev server:
    
    ```bash
    ng serve
    
    ```
    
2.  Open your browser at [http://localhost:4200/](http://localhost:4200/) to view the app.
3.  The app will automatically reload if you change any of the source files.

## Adding New Standalone Components

Since the project uses **standalone** components, you won’t see an `AppModule` or typical NgModule-based structure.

-   **Generate a component**:
    
    ```bash
    ng generate component my-new-component --standalone
    
    ```
    
    (The `--standalone` flag tells the CLI to create a standalone component.)    

## Code Scaffolding

You can generate other Angular features (directives, pipes, services, etc.) via the CLI. For instance:

```bash
ng generate directive directive-name

```

For a complete list of schematics:

```bash
ng generate --help

```

## Building

To build the project for production:

```bash
ng build

```

The build artifacts will be stored in the `dist/` directory. A production build automatically applies optimizations and minification for better performance.

## Deployment

-   After running `ng build`, the `dist/` folder contains the production-ready files.
-   Deploy the contents of `dist/` to your preferred hosting platform (e.g., Netlify, Vercel, GitHub Pages, or a custom server).


## License

This project is licensed under the GNU General Public License v3.0.

You are free to use, modify, and distribute this software under the terms of the [GPL-3.0 License](./LICENSE).

© 2025 Raj Pawar. All Rights Reserved.
