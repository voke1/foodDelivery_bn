import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 9000;
  app.enableCors();
  await app.listen(port);

}
bootstrap();
