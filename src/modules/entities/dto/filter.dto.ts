import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class FilterBodyDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @Min(0)
  @Max(20)
  startId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @Min(0)
  @Max(20)
  endId: number;
}
