import { Module } from '@nestjs/common';
import { KaderController } from './kader.controller';
import { KaderService } from './kader.service';

@Module({
  controllers: [KaderController],
  providers: [KaderService]
})
export class KaderModule { }
