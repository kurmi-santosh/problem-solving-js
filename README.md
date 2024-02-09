# problem-solving-js

Practice problem solving with JavaScript

## Setup

```sh
    npm init
```

## Setup for typeScript

```sh
    npm install --save-dev typescript
    nano tsconfig.json
```

## Update/Add the tsconfig file

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

## Debugging typeScript

```sh
    npm install --save-dev ts-node
    nano launch.json
```

## Add below to launch.json file

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug TypeScript",
      "type": "node",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\src\\index.ts",
      "runtimeArgs": [
        "-r",
        "ts-node/register",
        "-r",
        "tsconfig-paths/register"
      ],
      "console": "integratedTerminal",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```
