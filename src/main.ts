import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// simple declaration to satisfy TypeScript when @types/node isn't installed
declare const process: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
