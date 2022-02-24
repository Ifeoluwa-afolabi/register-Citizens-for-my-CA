import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDataDto } from './dto/create-Bio-Datum.dto';  
import { UpdateBioDatumDto } from './dto/update-Bio-Datum.dto';
import { BioData } from './entities/Bio-Datum.entity';
@Injectable()
export class BioDatasService {
constructor(
//inject BioData repository for use here in BioDatasService as if it is part of the class
@InjectRepository(BioData)
private BioDatasRepository: Repository<BioData>
){}
async create(createBioDataDto: CreateBioDataDto) {
const newBioData: BioData = this.BioDatasRepository.create(createBioDataDto)
return this.BioDatasRepository.save(newBioData);
//return 'This action adds a new BioData';
}
async findAll() {
  //return `This action returns all BioDatas`;
  return await this.BioDatasRepository.find();
  }
  async findOne(id: number) {
    //return `This action returns a #${id} BioData`;
    return await this.BioDatasRepository.findOne(id);
    }
    async update(id: number, updateBioDataDto:
    UpdateBioDatumDto) {
    //return `This action updates a #${id} BioData`;
    return await this.BioDatasRepository.update(id,
    updateBioDataDto);
    }
    async remove(id: number) {
    //return `This action removes a #${id} BioData`;
    return await this.BioDatasRepository.delete(id);
    }
  }