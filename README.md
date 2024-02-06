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
