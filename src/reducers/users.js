//  或许真的不需要 users呢？ 不， 我觉得还是需要， 需要合理设计state
import { RECEIVE_ALL_TOPICS } from "../contants/index";

const users = (state={},action)=>{
    switch(action.type){
        case RECEIVE_ALL_TOPICS:{
            return {
                ...action.value.reduce((init, item)=>{
                        item.author_id ? null : item["author_id"] = "未知作者id";
                        init[item.author_id] = {...item.author,"author_id":item.author_id}
                        return init;
                },{}) 
            }
        }
        default: return state
    }
}
export default users;