#  Webpack/Babel Blank Preact-Template

## How to build
You will need node installed (preferably node10 or higher).

1. From this directory `yarn install`. if you do not have yarn, `npm install --global yarn` or `npm install`
2. `npm run build`

Thats it.

## Development
`npm run build:dll` to generate a file containing static-never-changing libraries. This speeds up rebuild time.
Use `npm start` to initialize a hot-reloading server at `localhost:3000`.

## Linting
```
npm install \
  redux-saga \
  babel-eslint \
  eslint \
  eslint-plugin-react \
  eslint-plugin-redux-saga \
  eslint-plugin-jsx-a11y \
  eslint-config-airbnb\
  eslint-plugin-import
```
Note: If you get errors, try installing without the -g flag. Eslint may not see alias resolution from the global installation. (eg: react is aliased to preact)

## Todo
* Alias react to preact but work with eslint