import { ENTITIES_URL } from '@const/data';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FilterBodyDto } from './dto';
import { RedisService } from 'nestjs-redis';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class EntitiesService {
  private client: Redis;
  constructor(
    private readonly redis: RedisService,
    private config: ConfigService,
  ) {
    this.client = this.redis.getClient(this.config.get('redis.name'));
  }
  async filter(dto: FilterBodyDto) {
    const response = [];
    for (let index = dto.startId; index <= dto.endId; index++) {
      const registered = await this.client.get(index.toString());
      let body = registered ? JSON.parse(registered) : {};
      if (!registered) {
        const { data } = await axios.get(ENTITIES_URL + index);
        delete data.data.ipAddress;
        body = data.data;
        await this.client.set(index.toString(), JSON.stringify(body));
      }
      response.push(body);
    }
    return response;
  }
}
