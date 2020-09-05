import * as types from "../contants/index";
const getAllTopic = (value)=>(dispatch)=>{   //  已拿到当前页的数据，发送到store
  //  console.log(value)
    dispatch({
        type:types.RECEIVE_ALL_TOPICS,
        value
    })
}
const getAllComments = (dispatch)=>(value) =>{
    dispatch({
        type: type.RECEIVE_ALL_COMMENTS,
        value
    })
}
export { getAllTopic, getAllComments };