import { Module } from '@nestjs/common';
import { KaderModule } from './kader/kader.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [KaderModule, AuthModule],
})
export class AppModule { }
