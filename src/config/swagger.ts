import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('SOYYO')
  .setDescription('')
  .setVersion('1.0')
  .build();
