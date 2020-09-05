import React from 'react';
import { Card } from "antd";
import style from "../../styles/detail.module.css";
function DetailContent(props){
    let { data } = props;
    console.log(data)
    return (
        <div>
            {Object.keys(data).length!==0 && <Card  title={
                <div className={style.header}>
                    <div className={style.title}>{data.title}</div> 
                    {/* <span><span>{data.author.loginname || data.loginname}</span>发表于：{data.create_at.getFormat()}</span> */}
                    <span>{`最后回复时间：${data.last_reply_at.getFormat()}`}</span>
                </div>} 
                type="inner"
            >
                <div  dangerouslySetInnerHTML={
                    {
                        __html:data.content
                    }
                }></div>
            </Card>}
        </div>
    )
}
String.prototype.getFormat = function(){
    return this.split("T")[0];
}
export default React.memo ( DetailContent );