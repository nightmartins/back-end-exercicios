~ 1. criar o diretório e iniciar o projeto Node
mkdir express-typescript && cd express-typescript
npm init -y

~ 2. adicionar o suporte ao TypeScript
npm install -D typescript

~ 3. criar o arquivo tsconfig.json com a seguinte configuração:
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "rootDir": "./",
        "outDir": "./dist",
        "esModuleInterop": true,
        "strict": true
    }
}

~ 4. instalar como dependência de desenvolvimento o pacote npm de declarações de tipos para os módulos padrões do Node. 
npm install -D @types/node

~ 5. Por último vamos instalar o ts-node-dev
npm install -D ts-node-dev

~ Já nas nossas próximas configurações de projetos Node + TypesCript , podemos fazer todas as instalações em único comando: ~ 
npm install -D typescript @types/node ts-node-dev

EXPRESS

npm install express
npm install -D @types/express
touch index.ts

// ./index.ts
/*
import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
*/

Para termos certeza que esse código funciona, vamos criar alguns scripts no nosso package.json e rodar a aplicação: 
...
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"
 },
...

Refatorar a aplicação para que passe a utilizar os tipos:

// ./index.ts

import express, { Request, Response } from "express";

const app = express();

const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript")
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


