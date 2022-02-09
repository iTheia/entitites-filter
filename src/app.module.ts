import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from 'nestjs-redis';
import { config, ConfigValidationSchema, redisConfig } from './config';
import { EntitiesModule } from './modules/entities/entities.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config, redisConfig],
      validationSchema: ConfigValidationSchema,
    }),
    RedisModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('redis'),
      inject: [ConfigService],
    }),
    EntitiesModule,
  ],
})
export class AppModule {}
