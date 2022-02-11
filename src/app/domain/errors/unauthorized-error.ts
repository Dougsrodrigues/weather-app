export class UnauthorizedError extends Error {
  constructor(readonly message: string) {
    super(message);
    this.name = 'UnexpectedError';
  }
}
