// import { Comment } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";


class CommentsService{
  async createComment(commentData){
    logger.log(commentData)
    const res = await api.post(`/api/comments`, commentData)
    // logger.log('creating a comment from the res', res.data)
    logger.log('[CREATING COMMENT](', res.data)
    AppState.eventComments.push(res.data)

  }
}



export const commentsService = new CommentsService();