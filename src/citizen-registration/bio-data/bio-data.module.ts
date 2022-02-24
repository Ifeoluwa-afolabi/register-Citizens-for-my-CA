import { Module } from '@nestjs/common';
import { BioDatasService } from './bio-data.service';
import { BioDataController } from './bio-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BioData } from './entities/bio-Datum.entity';
@Module({
  imports: [TypeOrmModule.forFeature([BioData])],
  controllers: [BioDataController],
  providers: [BioDatasService],
})
export class BiodatumModule {}
