import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import { SolvedAcClient } from './solved-ac.client';

@Module({
  controllers: [ProblemController],
  providers: [ProblemService, SolvedAcClient],
})
export class ProblemModule {}
