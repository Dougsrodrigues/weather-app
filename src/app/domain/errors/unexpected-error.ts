export class UnexpectedError extends Error {
  constructor(readonly message: string) {
    super(message);
    this.name = 'UnexpectedError';
  }
}
