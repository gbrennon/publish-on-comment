import { v4 as uuid } from 'uuid';
import { Comment } from '../../domain/entities/comment.entity';

export class PublishCommentCommand {
  constructor(
    public postId: string,
    public userId: string,
    public content: string,
  ) {}
}

export class PublishCommentHandler {
  constructor(private commentRepository: CommentRepository) {}

  async handle(command: PublishCommentCommand) {
    const comment = new Comment(
      uuid(),
      command.content,
      command.postId,
      command.userId,
    );
    await this.commentRepository.save(comment);
  }
}
