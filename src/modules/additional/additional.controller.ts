import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AdditionalController {
  @Get('version')
  version() {
    return {
      version: '1.0',
    };
  }
  @Get('')
  status() {
    return {
      status: 200,
    };
  }
}
