import { Controller, Get } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemResponse } from './dto/problem-response.dto';

@Controller('/api/v1/problems')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Get()
  async findRandomProblems(): Promise<ProblemResponse[]> {
    const problems = await this.problemService.findRandomProblems();
    return problems.map(problem => new ProblemResponse(problem));
  }
}
