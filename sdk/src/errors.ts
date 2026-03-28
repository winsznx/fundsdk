export class FundotError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FundotError";
  }
}
