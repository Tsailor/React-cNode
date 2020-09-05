import { combineReducers } from "redux";
import topics from "./topic";
import users from "./users";
export default combineReducers({
    topics,      // 帖子列表    
    // comments,    // 评论
    users        //  用户信息
})

/*
    state设计

    topics: {
        byId: {
            topicId1: { topicId1, author_id, tab, content, reply_count, visit_count ,last_reply_at, create_at }  // 包括帖子详情
            ...
        }
        containId:[topicId1, topicId2 ...]
    }
    comments:{
        topicId1: {
            commentId1: { commentId1,title, author_id, create_at }
        }
    }
    authors: {
        author_id,
        name,
        author_hov
          ...
    }
*/