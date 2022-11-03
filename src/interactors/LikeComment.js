export default class LikeComment {
  constructor({ commentStore, commentService }) {
    this.commentStore = commentStore;
    this.commentService = commentService;
  }

  async execute(commentId) {
    const comment = await this.commentService.likeComment(commentId);
    this.commentStore.updateCommentLikes(commentId);
  }
}
