import { v4 as uuid } from 'uuid';

import { Factory } from '../../../../shared/factories/factory.interface';
import { Comment } from '../entities/comment.entity';

export class NewCommentParameters {
  constructor(
    public content: string,
    public postId: string,
    public userId: string,
  ) {}
}

export class NewCommentFactory
  implements Factory<Comment, NewCommentParameters>
{
  public create(parameters: NewCommentParameters): Comment {
    const commentId = uuid();

    return new Comment(
      commentId,
      parameters.content,
      parameters.postId,
      parameters.userId,
    );
  }
}
