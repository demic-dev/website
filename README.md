# My Developer Portfolio

Welcome to my personal developer portfolio repository! This website is made with _NextJS_, _styled-components_ and _i18n_.

## Table of Contents

- [Introduction](#introduction)
- [Setup and Installation](#setup-and-installation)
- [Maintenance](#maintenance)
- [Usage](#usage)
- [License](#license)

## Introduction

I am Michele De Cillis, a developer and a tech enthusiast. This portfolio showcases my skills, projects, and professional journey. Feel free to explore and connect with me.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install dependancies:

   ```bash
       npm install # or yarn install
   ```

4. Start the development server:

   ```bash
       npm run dev
   ```

## Usage

After starting the development server, you can view the website by navigating to `http://localhost:3000` in your web browser.

## Maintenance

When creating a new file, make sure to surround all the imports with this decorator:

```typescript
// #region ::: IMPORTS
// #endregion ::: IMPORTS
```

Also, all the imports are divided per kind of import, in order to maintain the imports easy to read. There are the following kinds:

```typescript
// libs - All the external libraries
// components - All the custom React components
// styles - All the styles file (styled-components and so)
// utils - All the miscellaneous, like generic functions, translations
// data - All the data file, like translations or data structures
// types - All the file imports
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
