import { PartialType } from '@nestjs/mapped-types';
import { CreateBioDataDto } from './create-bio-datum.dto';

export class UpdateBioDatumDto extends PartialType(CreateBioDataDto) {}

