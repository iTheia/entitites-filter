import { Body, Controller, Post } from '@nestjs/common';
import { FilterBodyDto } from './dto';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post('filter')
  async filter(@Body() dto: FilterBodyDto) {
    return await this.entitiesService.filter(dto);
  }
}
