export class Advert {
  constructor(
    public id: string|null,
    public categoryId: string,
    public name: string,
    public cost: string,
    public location: string,
    public phone: string,
    public description: string|null,
    public img: string[],
    public createdAt:Date
  ) {
  }
}
