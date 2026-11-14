## [4.1.0](https://github.com/reiji1020/ccl-component-kit4svelte/compare/4.0.3...4.1.0) (2026/11/14)

### Features

- Added custom cell and empty-state snippets, configurable dimensions, and accessible column sorting to Table while preserving its existing data API. (#140, #173)
- Added CSS dimension tokens for Button, Input, and Select without changing their default dimensions. Input and Select share field tokens, and the documentation includes scoped override examples. (#141, #174)

## [4.0.3](https://github.com/reiji1020/ccl-component-kit4svelte/compare/4.0.2...4.0.3) (2026/11/12)

### Bug Fixes

- Isolated Toaster notifications from server-side rendering and fixed SlideMenu rendering on the server. (#152, #151)
- Prevented form submission from DatePicker, Tabs, Accordion, and Dialog controls. (#153)
- Kept Tabs in sync with changes to their panels and DatePicker's displayed month in sync with external date updates. (#154, #155)
- Fixed label associations in Textarea, Input, Select, and Accordion, and associated Input validation messages with their fields. (#156, #157, #137)

### Enhancements

- Added native HTML form attributes to Input and Select and configurable button types to Button. (#136)
- Added Svelte 5 quickstart and form examples to the README and Storybook. (#139)

### Maintenance

- Added pull request checks for types, packaging, SSR, and Storybook interactions using the official Playwright container. (#138, #169)

## [4.0.2](https://github.com/reiji1020/ccl-component-kit4svelte/compare/4.0.1...4.0.2) (2026/11/09)

### Maintenance

- Updated the development and CI runtime to Node.js 22.23.4 LTS, including upstream security fixes. (#134, #135)
- Updated Storybook to 8.6.19. (#150)

## [4.0.1](https://github.com/reiji1020/ccl-component-kit4svelte/compare/4.0.0...4.0.1) (2026/07/19)

### Features

- Added optional descriptions to PrismaticWorkCard with long-text wrapping and expanded Storybook coverage. (#125, #127)
- Added configurable Prismatic component variants for headers, story and book cards, and Studio footers. (#126, #128)

### Bug Fixes

- Recomputed Pagination items after page changes, including minimal controls with `siblingCount={0}`. (#129, #131)

### Maintenance

- Aligned the npm publish workflow badges in the repository and Storybook READMEs with release-triggered runs. (#130, #132)

## [4.0.0](https://github.com/reiji1020/ccl-component-kit4svelte/compare/3.1.0...4.0.0) (2026/07/15)

### Breaking Changes

- Raised the supported Svelte peer dependency to `^5.0.0` and documented the Svelte 5-only migration contract. (#93, #114)

### Bug Fixes

- Resolved Svelte 5 type errors across public components while preserving their public APIs. (#111, #121)
- Resolved Storybook type errors and aligned stories and wrappers with component prop contracts. (#112, #122)
- Supplied required component props in the demo route for Svelte 5 type checking. (#113, #123)
- Added accessible Carousel navigation controls and verified slide changes through interaction tests. (#105, #117)

### Testing

- Stabilized DatePicker stories with fixed dates and deterministic navigation assertions. (#106, #116)
- Preserved the initial checked state in disabled RadioButton story tests. (#104, #115)
- Added disabled and unlabeled state coverage for form input stories. (#109, #118)
- Replaced args-only Button story assertions with rendered DOM verification. (#108, #119)
- Reworked Table story tests around rendered headers, rows, styles, and scrolling behavior. (#107, #120)

### Maintenance

- Restricted npm publishing to published GitHub Releases instead of merges to `main`. (#103, #110)

## [3.1.0](https://github.com/reiji1020/ccl-component-kit4svelte/compare/3.0.0...3.1.0) (2026/07/15)

### Features

- Added Prismatic V2 color palette tokens and Storybook palette previews. (#81)
- Added the PrismaticGradientButton component. (#83, #91)
- Added the PrismaticSectionHeading component. (#84, #92)
- Added the PrismaticStoryCard component with responsive and square-image variants. (#85, #94)
- Added the PrismaticWorkCard component. (#86, #95)
- Added the PrismaticBookCard component. (#87, #96)
- Added the PrismaticSiteHeader component with color-aware SVG logo support. (#88, #97)
- Added the PrismaticSiteFooter component with gradient backgrounds and SVG logo support. (#89, #98)
- Added the PrismaticAmbientGlow background decoration component. (#90, #99)

### Maintenance

- Hardened pnpm dependency installation and CI configuration. (#82)
- Updated the grouped npm dependencies. (#80)

## [3.0.0](https://github.com/reiji1020/ccl-component-kit4svelte/compare/2.0.7...3.0.0) (2025/09/12)

### MAJOR UPDATE

- We have largely assembled the components required for site construction.
- Fixed an issue where the pagination component was unavailable.
