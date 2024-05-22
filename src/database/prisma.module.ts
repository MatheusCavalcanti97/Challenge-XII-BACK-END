import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CarModule } from 'src/car/car.module';
import { CarService } from 'src/car/car.service';

@Module({
  providers: [PrismaService, CarService],
  imports: [CarModule],
  exports: [CarService],
})
export class PrismaModule {}
