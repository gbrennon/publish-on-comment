import { NewCommentFactory } from '../../../domain/factories/new-comment.factory';
import { CommentRepository } from '../../../domain/repositories/comment.repository';

export class PublishCommentCommand {
  constructor(
    public postId: string,
    public userId: string,
    public content: string,
  ) {}
}

export class PublishCommentHandler {
  constructor(
    private commentRepository: CommentRepository,
    private newCommentFactory: NewCommentFactory
  ) {}

  async handle(command: PublishCommentCommand) {
    const comment = this.newCommentFactory.create(command);
    await this.commentRepository.save(comment);
  }
}
