# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Approach

I have gone through the following approach to redesign the page while keeping its functionality:

- Provided a different look for the process stepper for the small screen and big screen so as to enable it to be viewed totally on the screen with no need to scrool.
- Used conditional rendering to efficiently display selected items and options
