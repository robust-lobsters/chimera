import { Injectable } from '@nestjs/common';
import { Problem } from './model/problem.model';

@Injectable()
export class SolvedAcClient {

  queryRandomProblems(): Promise<Problem[]> {
    return fetch('https://solved.ac/api/v3/search/problem?query=(*9..16)&page=1&sort=random&direction=asc')
      .then((res) => res.json())
      .then((data) => {
        const problem = data.items[0];

        // FIXME
        return [new Problem(problem.problemId, problem.titleKo)];
      });
  }
}