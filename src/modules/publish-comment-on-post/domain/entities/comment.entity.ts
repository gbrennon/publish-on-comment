export class Comment {
  constructor(
    public id: string,
    public content: string,
    public postId: string,
    public userId: string,
  ) {}
}
