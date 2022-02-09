import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config, ConfigValidationSchema, redisConfig } from './config';
import { EntitiesModule } from './modules/entities/entities.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config, redisConfig],
      validationSchema: ConfigValidationSchema,
    }),
    EntitiesModule,
  ],
})
export class AppModule {}
