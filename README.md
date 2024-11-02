# ScentronixAssessment

## Project Libraries and Tools Overview

Here's a concise explanation of why **Nx**, **Axios**, **Tailwind CSS**, and **CVA** were chosen for this project.

---

### 1. Nx - Monorepo Management

Nx is ideal for managing large-scale, complex projects in a monorepo setup. It allows easy management of multiple applications and libraries, supports efficient CI/CD with caching, and integrates well with modern frameworks like React and Express. This makes Nx perfect for organizing and scaling applications with multiple components.

### 2. Axios - Simple and Powerful HTTP Client

Axios simplifies HTTP requests with a clean, Promise-based API, making it easy to handle asynchronous requests. It provides robust error handling, supports request customization, and is a great fit for any web project requiring API interactions.

### 3. Tailwind CSS - Utility-First CSS Framework

Tailwind CSS offers a fast way to design interfaces with utility classes, allowing for easy customization and scalability. It enables a modern, responsive design with minimal CSS writing and reduces CSS file size by removing unused styles, which enhances page performance.

### 4. CVA (Class Variance Authority) - Variant Management for CSS

CVA is a helpful tool for managing CSS variants, especially when paired with Tailwind CSS. It enables systematic variant creation and reuse, making it easy to manage styles across components based on states or modes, thus enhancing code clarity and reusability.

---

## Project Commands

These commands streamline development and testing for both the frontend and backend portions of the project using Nx.

### 1. Run this command to start Storybook, where you can interact with and test each component visually.

```sh
yarn run-storybook
```

### 2. Runs the Jest test suite for the backend assignment to ensure API functionality and stability.

```sh
yarn test-api
```

### (Optional) 3. Starts the frontend app (referred to as frontend-assignment) in development mode.

```sh
yarn run-app
```

### (Optional) 4. Starts the backend server (referred to as backend-assignment) in development mode.

```sh
yarn run-api
```