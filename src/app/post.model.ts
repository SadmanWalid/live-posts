export class Post {
  constructor(
    public title: string,
    public description: string,
    public imgPath: string,
    public author: string,
    public date: Date,
    public numberOfLikes: number,
    public numberOfDislikes : number
  ) {}
}
