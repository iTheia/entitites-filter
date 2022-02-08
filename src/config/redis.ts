import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export const redisConfig = registerAs('redis', () => ({
  name: env.REDIS_NAME,
  url: env.REDIS_URL,
  port: parseInt(env.REDIS_PORT),
}));
