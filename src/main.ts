import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiPrefix = 'api/v1';

  app.setGlobalPrefix(apiPrefix);

  const swaggerConfig = new DocumentBuilder().setTitle('Poste info').build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup(`${apiPrefix}/docs`, app, document);

  const logger = new Logger('Bootstrap');

  app.enableCors({ origin: '*' });

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    logger.log(`Application is running on port ${port}`);
  });
}
bootstrap();
