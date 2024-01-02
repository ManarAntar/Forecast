# Project Title
Forecast

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)

## Installation

Backend:

 - In ./src run: npm ci
 - In ./src run: npm start

Frontend :

To install and set up the project locally, follow these steps:

1. Ensure that you have Node.js and Angular CLI installed on your system.
2. Extract Zib file
3. Open a terminal and navigate to the project directory.
4. Run the following command to install the project dependencies:  npm install

## Usage

To start the development server and run the project, use the following command: ng s --o

your browser navigate directly to `http://localhost:4200/` to view the project.

## Dependencies

The project has the following main dependencies:

- Angular: ^12.0.0
- Angular Material: ^12.0.0
- RxJS: ^7.0.0
- TypeScript: ^4.3.5
- Tailwindcss": ^3.3.5
- fortawesome/fontawesome-free": ^6.4.2

For the full list of dependencies, refer to the `package.json` file.

## Folder Structure

The project follows the following folder structure:

 src/
    app/ 
       components/
       services/
       layouts/
       modules/
       shared/
             components/
             modules/
        models/
        app.component.*
        app.module.ts

- `app/components`: Contains reusable components used throughout the application.
- `app/services`: Contains Angular services for data retrieval and manipulation.
- `app/layouts`: Contains the main views and components of the application.
- `app/modules`: contain modules of all the features included in the project.
- `app/shared` : contain the shared modules and components across the project.
- `app/models` : contain models and interfaces for all the data response used.
- `app/app.component.*`: The root component of the application.
- `app/app.module.ts`: The main module where components, services, and dependencies are declared.
