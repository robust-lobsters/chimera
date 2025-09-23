import { Problem } from "../model/problem.model";

export class ProblemResponse {
    problemId: number;
    title: string;
    url: string;

    constructor(problem: Problem) {
        this.problemId = problem.problemId;
        this.title = problem.title;
        this.url = problem.url;
    }
}
