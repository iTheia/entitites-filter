import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { FilterBodyDto } from './dto';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post('filter')
  @HttpCode(200)
  async filter(@Body() dto: FilterBodyDto) {
    return await this.entitiesService.filter(dto);
  }
}
