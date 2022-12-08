import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController{
  constructor(){
    super(`api/comments`)
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:commentId', this.getCommentById)
      .post('', this.createComment)
      .delete('/:commentId', this.deleteComment)
  }

  async getCommentById (req, res, next) {
  try {
    const comment = await commentsService.getCommentById(req.params.commentId)
    res.send(comment)
  } catch (error) {
    next(error)
    }
  }

  async createComment (req, res, next) {
  try {
    let commentData = req.body
    commentData.creatorId = req.userInfo.id
    const comment = await commentsService.createComment(commentData)
    res.send(comment)
  } catch (error) {
    next(error)
    }
  }

  async deleteComment (req, res, next) {
  try {
    let comment = await commentsService.deleteComment(req.params.commentId, req.userInfo.id)
    res.send(comment)
  } catch (error) {
    next(error)
    }
  }
}