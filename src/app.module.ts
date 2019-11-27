import { Module } from '@nestjs/common';
import { KaderModule } from './kader/kader.module';

@Module({
  imports: [KaderModule],
})
export class AppModule { }
