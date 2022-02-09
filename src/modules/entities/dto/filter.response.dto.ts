import { ApiResponseProperty } from '@nestjs/swagger';

export class FilterResponseDto {
  @ApiResponseProperty({
    type: Number,
    example: 1,
  })
  entityId: number;
  @ApiResponseProperty({
    type: String,
    example: 'Tuya',
  })
  name: string;
  @ApiResponseProperty({
    type: Number,
    example: '123456789',
  })
  identificationNumber: string;
  @ApiResponseProperty({
    type: Date,
    example: 1,
  })
  @ApiResponseProperty({
    type: Date,
    example: '2030-10-13',
  })
  expirationDate: Date;
  @ApiResponseProperty({
    type: String,
    example: 'Ana Maria Palacio',
  })
  contactName: string;
  @ApiResponseProperty({
    type: String,
    example: 'apalacioh@tuya.com.co',
  })
  contactMail: string;
  @ApiResponseProperty({
    type: String,
    example:
      'https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_soyyo.png',
  })
  logo: string;
}
