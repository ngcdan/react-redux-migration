# Migrating react-redux project
#### Install TypeScript ,ts-loader and source-map-loader as dev dependencies
```
  npm install --save-dev typescript ts-loader source-map-loader
```
- ts-loader compile typescript to javascript
- source-map-loader support debuging


#### Get the [type declaration files](https://github.com/DefinitelyTyped/DefinitelyTyped) for react, react-dom
```
  npm install --save @types/react @types/react-dom @types/react-router-dom
```

#### Add config file
- tsconfig.json
```
  {
      "compilerOptions": {
          "outDir": "./dist/",        // path to output directory
          "sourceMap": true,          // allow sourcemap support
          "strictNullChecks": true,   // enable strict null checks as a best practice
          "module": "es6",            // specify module code generation
          "jsx": "react",             // use typescript to transpile jsx to js
          "target": "es5",            // specify ECMAScript target version
          "allowJs": true             // allow a partial TypeScript and JavaScript codebase

      },
      "include": [
          "./src/"
      ]
  }
```

-  See more options in the full list of [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

#### Migrating webpack using Typescript
[Wepack 5 writing by ts file](https://webpack.js.org/configuration/configuration-languages/#typescript)

```
  npm install --save-dev typescript ts-node @types/node @types/webpack
  # and, if using webpack-dev-server < v4.7.0
  npm install --save-dev @types/webpack-dev-server
```

- tsconfig.ts

```
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJs"
    }
  }
```

[See detail](#)