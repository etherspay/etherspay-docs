<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="./src/images/etherspay-logo-text.svg" width="300" />
  </a>
</p>
<h1 align="center">
  Documentation
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/aaf6d344-4c02-4d5e-95aa-973514d0e9ab/deploy-status)](https://app.netlify.com/sites/etherspay-docs/deploys)

## Commit convention

Mantine is a monorepo, thus it is important to write correct commit messages to keep the git history clean and consistent.
All commits made in this repository are divided into 3 groups:

- **package commits** Related to any particular package.
- **docs commits** Related to the documentation.
- **core commits** Only related to repository tooling and not associated with any package.

Commit messages consists of 3 parts:

```
[area] Optional title: Message
```

Examples:

- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[docs] Update report issues link` – Change related to documentation website
- `[@mantine/core] Button: Add theme focus styles` – Change in `@mantine/core` package at Button component
- `[@mantine/hooks] use-list-state: Add remove handler` – Change in `@mantine/hooks` package at use-list-state hook
