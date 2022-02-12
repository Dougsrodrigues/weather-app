export class UnexpectedError extends Error {
  constructor() {
    super('Ocorreu um erro inesperado, tente mais tarde.');
    this.name = 'UnexpectedError';
  }
}
