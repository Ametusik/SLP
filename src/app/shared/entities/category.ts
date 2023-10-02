export class Category {
  constructor(
    public id:string,
    public parentId:string|null,
    public name:string,
    public childs: Category[]|null
  ) {
  }
}
