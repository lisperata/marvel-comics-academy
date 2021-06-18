export default class HeroApiError extends Error {
  public name: string;

  public constructor(message: string) {
    super(message);
    this.name = 'Error in get heroes';
  }
}
