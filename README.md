# File Explorer App

## Description:

The File Explorer app enables users to navigate through files or folders with enriched features like sidebars, breadcrumbs which can be used to manage the files/folders content being displayed in the main section.

It also gives users the ability to add new files/folders to the existing list.

---
## Dependencies:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React version: 17.0.2

It uses the following dependencies:
- [Redux](https://redux.js.org/) for state management
- [React Redux](https://react-redux.js.org), the official Redux UI binding library for React.
- [Chakra](https://chakra-ui.com) for components such as tooltip and modal.

---

## Getting Started:

In the project directory, you can run:

### `npm i`
Installs the required npm dependencies that are listed in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

---

## Components

Mostly custom components have been used for listing and switching view between folder structures such as 'Sidebar', 'MainContent', 'Breadcrumbs' sections.

The data being fed to the store is based on object mapping to suffice the use case.

The project makes use of latest hooks features and all components are functional components.

---