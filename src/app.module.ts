import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config, ConfigValidationSchema, redisConfig } from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config, redisConfig],
      validationSchema: ConfigValidationSchema,
    }),
  ],
})
export class AppModule {}
