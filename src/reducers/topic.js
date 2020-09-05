import { RECEIVE_ALL_TOPICS } from "../contants/index";
import { combineReducers } from "redux";

const byIds = (state={},action) => {
    console.log(action.value)
    switch(action.type){
        case RECEIVE_ALL_TOPICS :{
            return {
               ...action.value.reduce((init, item) =>{
                   init[item.id] =  { 
                        "id": item.id,
                        "author_id": item.author_id,
                        "tab": item.tab,
                        "content": item.content,
                        "title": item.title,
                        "last_reply_at":item.last_reply_at,
                        // "good": item.good,     后续扩展
                        // "top": item.top,
                        "reply_count": item.reply_count,
                        "visit_count": item.visit_count,
                        "create_at": item.create_at
                    }
                    return init;
               },{})
            }
        }
        default: return state;
    }
}
const containIds = (state= [],action) => {
    switch(action.type){
        case RECEIVE_ALL_TOPICS :{
            return action.value.map((item)=>item.id)  // 数组
        }
        default:return [];
    }
}
export const getTopicLists = (state) =>{    // 返回当前页的 lists
    return state.topics.containIds.map( (item )=>({
        ...state.topics.byIds[item],
        ...state.users[state.topics.byIds[item].author_id]
    }))
}
export const getDetails = (state) =>{     
    return state.topics.byIds;
}
export const doTest = (state) =>(id)=>{

    console.log(state)
    console.log(id)
    console.log(state.topics)
    return state.topics.byIds[id]
}
// export const doTest = (state)=>{
    
//     console.log(state)
//    return state
// }
export default combineReducers({  // topics里继续拆分，
    byIds,                        //   byIds 通过键值对的形式， 对应 帖子id -> 帖子
    containIds                    //    containIds 数组包含当前页所有的 帖子id
});

/*
   state设计

    topics: {
        byId: {
            topicId1: { topicId1, author_id, tab, content, reply_count, visit_count ,last_reply_at, create_at }  // 包括帖子详情
            ...
        }
        containId:[topicId1, topicId2 ...]
    }
*/

/* topics接口数据
id: "5d3ac164b4725a628e268eff"
author_id: "5ad86092a7d228c16b987042"
tab: "ask"  
content: <div></div>
title: "Node服务端该怎样规划未来的职业方向？"
last_reply_at: "2020-05-12T05:12:03.809Z"
good: false
top: false
reply_count: 23
visit_count: 6821
create_at: "2019-07-26T09:01:24.618Z"
author: {loginname: "dingyuanwu", avatar_uid, author_hov }
*/