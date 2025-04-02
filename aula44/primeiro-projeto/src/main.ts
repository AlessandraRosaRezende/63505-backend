import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serveStatic from 'serve-static';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/uploads', serveStatic(join(__dirname, '..', 'uploads')));

  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('API for managing users and products')
    .setVersion('1.0')
    .addTag('products')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
