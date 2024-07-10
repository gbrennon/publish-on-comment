import {
  PublishCommentHandler,
  PublishCommentCommand,
} from './publish-comment.handler';
import { CommentRepository } from '../../../domain/repositories/comment.repository';
import {
  NewCommentFactory,
  NewCommentParameters,
} from '../../../domain/factories/new-comment.factory';
import { Comment } from '../../../domain/entities/comment.entity';

describe('PublishCommentHandler', () => {
  let handler: PublishCommentHandler;
  let commentRepository: jest.Mocked<CommentRepository>;
  let commentFactory: jest.Mocked<NewCommentFactory>;

  beforeEach(() => {
    commentRepository = {
      save: jest.fn(),
      findByPostId: jest.fn(),
    } as jest.Mocked<CommentRepository>;

    commentFactory = {
      create: jest.fn(),
    } as jest.Mocked<NewCommentFactory>;

    handler = new PublishCommentHandler(commentRepository, commentFactory);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  it('should create and save a comment', async () => {
    const postId = 'post123';
    const content = 'This is a comment';
    const author = 'author123';
    const comment = new Comment('id123', postId, content, author);
    const command = new PublishCommentCommand(postId, author, content);

    commentFactory.create.mockReturnValue(comment);
    commentRepository.save.mockResolvedValue(undefined);

    await handler.handle(command);

    //expect(result).toEqual(comment);
    const expectedParameters = new NewCommentParameters(
      content,
      postId,
      author,
    );
    expect(commentFactory.create).toHaveBeenCalledWith(expectedParameters);
    expect(commentRepository.save).toHaveBeenCalledWith(comment);
  });
});
