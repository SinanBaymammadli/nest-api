import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4400;
  Logger.log(`Listening on: http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
