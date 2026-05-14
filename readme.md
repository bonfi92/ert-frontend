# ERT Frontend

Frontend assets (HTML, CSS, JS) for the [ERT WordPress theme](https://github.com/bonfi92/ert-wordpress).

Built with [Foundation for Sites](https://get.foundation/), [Gulp](https://gulpjs.com/), and [Panini](https://get.foundation/sites/docs/panini.html).

## Prerequisites

- **Node.js** `12.22.12` — use [nvm](https://github.com/nvm-sh/nvm) to install the correct version:

  ```bash
  nvm install
  nvm use
  ```

- **Yarn v1**

  ```bash
  npm install -g yarn
  ```

- **[Local](https://localwp.com/)** — used to run the WordPress site locally. Make sure the [ert-wordpress](https://github.com/bonfi92/ert-wordpress) theme is installed in your Local site.

## WordPress theme path

The `build-local` script copies the compiled assets into your local WordPress theme folder.

The destination is defined in `config.yml` under `PATHS.wordpressTheme`:

```yaml
wordpressTheme: "/Users/<your-user>/Local Sites/ert-kingdom/app/public/wp-content/themes/ert"
```

Update this path to match your own Local site installation.

## Installation

```bash
yarn install
```

## NPM Scripts

### `yarn start`

Starts a local development server on **localhost:8000** with BrowserSync.
Files are watched for changes — HTML, SCSS, JS, and images are automatically recompiled and the browser is reloaded.

### `yarn build`

Creates a production build in the `dist/` folder.
CSS is minified, JavaScript is bundled and minified, and images are optimized.

### `yarn build-local`

Runs a full production build and then copies the compiled assets from `dist/assets` into the WordPress theme folder defined in `config.yml` (`PATHS.wordpressTheme`).
Use this when you want to test the latest frontend changes inside your Local WordPress site.
