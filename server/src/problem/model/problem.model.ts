export class Problem {
    problemId: number;
    title: string;
    url: string;

    constructor(problemId: number, title: string) {
        this.problemId = problemId;
        this.title = title;
        this.url = `https://www.acmicpc.net/problem/${problemId}`
    }
}
