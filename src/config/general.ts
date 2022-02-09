import * as dotenv from 'dotenv';

dotenv.config();

export const config = () => ({
  port: parseInt(process.env.PORT),
  entititesUrl: process.env.ENTITIES_URL,
});
