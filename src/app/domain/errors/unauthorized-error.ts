export class UnauthorizedError extends Error {
  constructor() {
    super('Você não tem permissão.');
    this.name = 'UnexpectedError';
  }
}
