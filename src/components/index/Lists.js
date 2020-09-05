import React from 'react';
import { List, Avatar, Typography, Space, Pagination } from 'antd';
import { MessageOutlined, ReadOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom"
import style from "../../styles/lists.module.css";
function Lists(props) {
    let { data, handleSize, handlePage } = props;
    const typeObj = {
        "all": "全部",
        "good": "精华",
        "ask": "问答",
        "share": "分享",
        "dev": "测试",
        "job": "工作"
    }
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <div id={style.listPanel}>
            <List
                itemLayout="vertical"
                size="default"
                
                dataSource={data}
                footer={
                    <div></div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText icon={ReadOutlined } text={item.visit_count} key="list-vertical-star-o" />,
                            <IconText icon={MessageOutlined} text={item.reply_count} key="list-vertical-like-o" />,
                        <span>最近回复：{item.last_reply_at.getFormat()}</span>
                        ]}
                    >   <Typography.Text mark id={style.mark}>{typeObj[item.tab]}</Typography.Text>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar_url} />}
                            // title={<a href="#">{item.title}</a>}
                            title ={<Link to={`/detail/${item.id}`}>{item.title}</Link>}
                            description = {<div><span>作者：{item.loginname}</span><span style={{marginLeft:"30px"}}>创建时间：{item.create_at.getFormat()}</span></div>}
                        />

                    </List.Item>
                )}
            />
            <Pagination
                showSizeChanger
                onShowSizeChange={(current, pageSize)=>handleSize(pageSize)}
                onChange={(page)=>handlePage(page)}
                defaultCurrent={1}
                total={500}
            />
        </div>

    )
}
String.prototype.getFormat = function(){
    return this.split("T")[0];
}
export default Lists;