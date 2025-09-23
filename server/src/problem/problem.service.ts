import { Injectable } from '@nestjs/common';
import { SolvedAcClient } from './solved-ac.client';
import { Problem } from './model/problem.model';

@Injectable()
export class ProblemService {
  constructor(
    private solvedAcClient: SolvedAcClient,
  ) {}

  async findRandomProblems() : Promise<Problem[]> {
    return this.solvedAcClient.queryRandomProblems();
  }
}
