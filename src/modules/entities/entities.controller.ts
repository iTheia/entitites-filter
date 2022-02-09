import { ErrorResponseDto } from '@const/dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilterBodyDto, FilterResponseDto } from './dto';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post('filter')
  @ApiOperation({
    summary: 'Endpoint that request data from SOYYO API',
  })
  @ApiResponse({ status: 200, type: FilterResponseDto, isArray: true })
  @ApiResponse({ status: 400, type: ErrorResponseDto })
  @HttpCode(200)
  async filter(@Body() dto: FilterBodyDto) {
    return await this.entitiesService.filter(dto);
  }
}
