import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllComments } from "../../actions/index";
import { getDetails } from "../../reducers/topic";
import { useDetailData } from "../../http/http";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import style from "../../styles/detail.module.css";
import DetailContent from "./DetailContent";
import Comments from "./Comments";
import { doTest } from "../../reducers/topic"
function Detail(props){
    let topicId = props.match.params.tab;
    let getValues = useDetailData(topicId);      //  根据id 请求 数据
    let {data, receiveAllComments, test } = props;     //  容器组件拿到的 data

    let res=test(topicId)
    console.log(res)
    let detailData = data[topicId];       // 从存放在store里的所有帖子里取出当前的帖子 方式一访问
    console.log(detailData)
    let [ isLoadingCommens, setLoadingComments ] = useState(false)   // 是否加载评论
    let [_datailData, set_detailData ] = useState({})         //  请求 获取 数据， 方式二访问
    useEffect(()=>{
        if(!detailData){     // 如果 当前帖子没有在store里存放，则请求  方式二访问，并 将评论送至store中管理
            getValues.then(res=>{
                console.log(res.data.data);
                set_detailData(res.data.data);
              //  receiveAllComments(res.data.data)   // 所有评论送至 store中管理
            })
        }
    },[])
    return(
        <div className={style.container}>
            <DetailContent data={detailData ? detailData : _datailData}/> 
            <div>
                <span>显示评论</span>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={isLoadingCommens}
                    onChange={()=>setLoadingComments(!isLoadingCommens)}
                />
            </div>
            {isLoadingCommens ? <Comments/> : null}
        </div>
    )
}
const mapStateToProps = (state)=>({
    data: getDetails(state),
    test: doTest(state)
})
const mapDispatchToProps = (dispatch)=>({
    receiveAllComments: getAllComments(dispatch)
})
export default connect(
    mapStateToProps, null
    // mapDispatchToProps
)( Detail );

/*
有两种方式访问 详情页
1 点击 列表项 跳转进来 -》 从 state里拿数据 （只有详情）+ 再次调用接口请求数据
2 直接URL里输入详情页的url  -》 调用接口请求数据（详情 + 评论）
*/