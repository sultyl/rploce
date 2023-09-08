# Canvas Application

This is a basic canvas application for the r/place-like canvas challenge.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm run dev`.
4. Open the website in your browser.

## Usage

- Click on a cell to select it.
- Use the color picker to change the cell's color.
- ...

## Author

- Sultan Adeleke



# r/ploce

# Setup

1. Clone this repository

You are provided with a monorepo containing two packages:

- A package `server` written using [feTS](https://the-guild.dev/openapi/fets)
- A package `website` with a frontend written in pure HTML/CSS/JS, bundled with [parcel](https://parceljs.org/)

2. Install the necessary dependencies

The following codebase lives in a [Node.Js](https://nodejs.org) project. Thus, `Node 20` is required to run it. We recommend using [Volta](https://volta.sh/) to manage Node.js versions

3. Install the repository dependencies

```sh
yarn
```

4. Start the development server

```sh
yarn workspace @rploce/server dev
```

The following log should appear `Server is listening on http://localhost:3003`, and you should be able to browse `http://localhost:3003/canvas` and retrieve the canvas JSON.

5. Browse the website

```sh
yarn workspace @rploce/website dev
```

The following log should appear `Server running at http://localhost:1234`, and you should be able to browse `http://localhost:1234` to visit the website.