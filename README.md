# Migrating react-redux project
#### Install TypeScript ,ts-loader and source-map-loader as dev dependencies
```
  npm install --save-dev typescript ts-loader source-map-loader
```
- ts-loader compile typescript to javascript
- source-map-loader support debuging

#### Get the [type declaration files](https://github.com/DefinitelyTyped/DefinitelyTyped) for react, react-dom
```
  npm install --save @types/react @types/react-dom
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

#### Set up build pipeline
