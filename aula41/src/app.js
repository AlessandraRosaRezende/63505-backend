import dotenv from 'dotenv';

import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT||8080;

dotenv.config();
connectDB();

// Convertendo import.meta.url para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o arquivo Swagger YAML
const swaggerFilePath = path.resolve(__dirname, './docs/**/*.yaml');
console.log('Swagger file path:', swaggerFilePath);

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'AdoptMe API',
      description: 'API para adotar mascotes',
      version: '1.0.0'
    }
  },
  apis: [swaggerFilePath]
};

// Gerando especificações do Swagger
const specs = swaggerJSDoc(swaggerOptions);

// Middleware para servir a documentação do Swagger UI
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
