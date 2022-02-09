import { ApiResponseProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiResponseProperty({
    type: [String],
    example: ['error...', 'error...'],
  })
  details?: string[];
  @ApiResponseProperty({
    type: String,
    example: 'Error procesing the request',
  })
  message: string;
  @ApiResponseProperty({
    type: String,
    example: 'Bad Request',
  })
  error: string;
  @ApiResponseProperty({
    type: Number,
    example: 400,
  })
  statusCode: number;
}
