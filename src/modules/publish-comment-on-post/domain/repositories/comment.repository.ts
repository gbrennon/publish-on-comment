import { Comment } from '../entities/comment.entity';

export interface CommentRepository {
  save(comment: Comment): Promise<void>;
  findByPostId(postId: string): Promise<Comment[]>;
}
