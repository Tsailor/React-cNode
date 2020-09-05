import React, { useEffect, useState, Fragment } from 'react';
import Loading from "../common/Loading";
import { useIndexData } from "../../http/http";
import Lists from "./Lists";
function IndexPageContent(props){
  // console.log(props) //   可以拿到路由信息 ，以及 容器组件传递来的内容
   let {path} = props.match;
   let [limit, setLimit ] = useState(20); // 默认每页20条数据
   let [page, setPage ] = useState(1)   // 默认展示第一页数据
   let options = {    // 配置参数
       limit: limit,
       page: page,
       tab: getParams(path)
    }
    
   const getIndexData = useIndexData(options);  // 请求topic
   let [isLoading, setIsLoading ] = useState(true)
   let { receiveAllTopic ,data} = props;    //  容器组件传递的内容
   console.log(data)
   useEffect(()=>{
        getIndexData.then(res=>{
            // console.log(res.data.data)
           receiveAllTopic(res.data.data);    // 拿到所有数据，发出action
           setIsLoading(false)
        })
    },[limit, page]) 
    const handelPage = (page)=>{
        setPage(page)
    }
    const handleSize = (size)=>{
        setLimit(size)
    }
   return(
        <Fragment>
            {isLoading ? <Loading /> : <Lists data={data} handlePage={handelPage} handleSize={handleSize}/>}
        </Fragment>
   )
}
function getParams(path){    // 获取路径 参数
    let reg=/\b\w+$/g;
    return path.match(reg)[0];
}
export default IndexPageContent;