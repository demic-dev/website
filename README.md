# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Maintenance

When creating a new file, make sure to surround all the imports with this decorator:

```typescript
// #region ::: IMPORTS
// #endregion ::: IMPORTS
```

Also, all the imports are divided per kind of import, in order to maintain the imports easy to read. There are the following kinds:

- libs - All the external libraries
- components - All the custom components
- styles - All the styles file (styled-components and so)
- utils - All the miscellaneous, like generic functions, translations
- data - All the data file, like translations or data structures
- types - All the file imports

```typescript
// libs
// components
// styles
// utils
// data
// types
```
