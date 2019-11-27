import { Module } from '@nestjs/common';
import { KaderController } from './kader.controller';
import { KaderService } from './kader.service';
import { GoogleStrategy } from 'src/auth/google.strategy';

@Module({
  controllers: [KaderController],
  providers: [KaderService, GoogleStrategy]
})
export class KaderModule { }
