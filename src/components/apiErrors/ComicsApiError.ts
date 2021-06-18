export default class ComicsApiError extends Error {
  public name: string;

  public constructor(message: string) {
    super(message);
    this.name = 'Error in get comics';
  }
}
