import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { towerEventsService } from "./TowerEventsService.js";


class CommentsService{

  // NOTE utility service to get one comment 
  async getCommentById(commentId) {
    let comment = await dbContext.Comment.findById(commentId).populate('creator', 'name picture')
    if(!comment){
      throw new BadRequest(`${commentId} is not a valid CommentId.`)
    }
    return comment
  }
  async getCommentsByEventId(eventId) {
    let comments = await dbContext.Comment.find({eventId}).populate('creator', 'name picture')
    return comments
  }
  async createComment(commentData) {
    let towerEvent = await towerEventsService.getEventById(commentData.eventId)
    if(towerEvent.isCanceled == true){
      throw new BadRequest('This event has been cancelled, you can no longer leave a comment.')
    }

    // TODO potentially add a verify for if the person leaving a comment is part of the event 

    let comment = await dbContext.Comment.create(commentData)
    await comment.populate('creator', 'name picture')
    return comment
  }
  async deleteComment(commentId, userInfo) {
    let comment = await this.getCommentById(commentId)
    if(comment.creatorId != userInfo){
      throw new Forbidden('You cannot delete a comment that you did not create.')
    }
    await comment.remove()
    return comment
  }
}


export const commentsService = new CommentsService()