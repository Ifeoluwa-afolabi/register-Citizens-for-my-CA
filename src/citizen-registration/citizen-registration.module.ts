import { Module } from '@nestjs/common';
import { BiodatumModule } from './bio-data/bio-data.module';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';

@Module({
  imports: [BiodatumModule, LinkedIdentityModule]
})
export class CitizenRegistrationModule {}
