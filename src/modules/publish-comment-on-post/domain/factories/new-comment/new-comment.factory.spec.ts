import { NewCommentFactory, NewCommentParameters } from './new-comment.factory';
import { Comment } from '../../entities/comment.entity';

describe('CommentFactory', () => {
  let commentFactory: NewCommentFactory;

  beforeEach(() => {
    commentFactory = new NewCommentFactory();
  });

  it('should create a Comment with the correct properties', () => {
    const postId = 'post123';
    const content = 'This is a comment';
    const author = 'author123';
    const parameters = new NewCommentParameters(content, postId, author);

    const comment = commentFactory.create(parameters);

    expect(comment).toBeInstanceOf(Comment);
    expect(comment.postId).toBe(postId);
    expect(comment.content).toBe(content);
    expect(comment.id).toBeDefined();
  });

  it('should generate a unique ID for each Comment', () => {
    const postId = 'post123';
    const content = 'This is a comment';
    const author = 'author123';
    const parameters = new NewCommentParameters(content, postId, author);

    const comment1 = commentFactory.create(parameters);
    const comment2 = commentFactory.create(parameters);

    expect(comment1.id).not.toBe(comment2.id);
  });
});
