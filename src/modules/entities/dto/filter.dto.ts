import { IsInt, Max, Min } from 'class-validator';

export class FilterBodyDto {
  @IsInt()
  @Min(0)
  @Max(20)
  startId: number;

  @IsInt({})
  @Min(0)
  @Max(20)
  endId: number;
}
