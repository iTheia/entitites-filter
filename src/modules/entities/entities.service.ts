import { ENTITIES_URL } from '@const/data';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FilterBodyDto } from './dto';

@Injectable()
export class EntitiesService {
  async filter(dto: FilterBodyDto) {
    const response = [];
    for (let index = dto.startId; index <= dto.endId; index++) {
      const { data } = await axios.get(ENTITIES_URL + index);
      delete data.data.ipAddress;
      response.push(data.data);
    }
    return response;
  }
}
