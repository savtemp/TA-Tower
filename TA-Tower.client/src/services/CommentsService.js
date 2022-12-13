// import { Comment } from "vue";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";


class CommentsService{
  async createComment(commentData){
    logger.log(commentData)
    const res = await api.post(`/api/comments`, commentData)
    logger.log('creating a comment from the res', res.data)
    // const newComment = new Comment(res.data)
    // logger.log('[CREATING COMMENT]',newComment)
  }
}



export const commentsService = new CommentsService();