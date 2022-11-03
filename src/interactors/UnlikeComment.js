export default class UnlikeComment {
  constructor({ commentStore, commentService }) {
    this.commentStore = commentStore;
    this.commentService = commentService;
  }

  async execute(commentId) {
    const comment = await this.commentService.unlikeComment(commentId);
    this.commentStore.updateCommentLikes(commentId);
  }
}
