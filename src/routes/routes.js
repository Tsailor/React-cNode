import { Redirect } from 'react-router-dom';
import React from 'react';
import Book from "../components/book/Book";
import About from "../components/about/About";
import Error from "../components/Error"
import IndexPage from "../components/index/IndexPage";
import Detail from "../components/details/Detail"
import { HomeOutlined ,AppstoreOutlined,FundOutlined } from '@ant-design/icons';
import { PicRightOutlined, IssuesCloseOutlined, ContactsOutlined, ForkOutlined, RotateRightOutlined, RadarChartOutlined } from '@ant-design/icons';
const URLTYPES = ["all", "good", "share", "job", "ask","dev"]
const urlLists = [    // 用户输入url，
    {
        path: "/",
        exact: true,
        render: (props)=> <Redirect to ='/index/all'/>
    },
    {
        path: "/index",
        exact: true,
        render: (props)=> <Redirect to ='/index/all'/>
    },
    {
        path: "/book",
        exact: true,
        render: (props) =><Book {...props}/>
    },
    {
        path: "/about",
        exact: true,
        render: (props)=><About {...props} />
    },{
        path: "/index/:tab",
        exact: true,
        render: (props)=> {   
            let {tab} = props.match.params;
            return URLTYPES.indexOf(tab) !== -1 ? <IndexPage {...props} /> : <Error {...props}/> 
        }
    },{
        path: "/detail/:tab",
        exact: true,
        render: (props)=><Detail {...props} />
    },{
        path: "*",
        exact: true,
        render: (props)=><Error {...props} />
    }
];

const navlists = [             
    {
        path: "/index/all",
        name: "首页",
        exact: true,
        icontype: <HomeOutlined />
    },{
        path: "/book",
        name: "教程",
        exact: true,
        icontype: <AppstoreOutlined/>,
       
    },{
        path: "/about",
        name: "关于",
        exact: true,
        icontype: <FundOutlined  />
    }
]

const IndexPageLists = [
    {
        name:"全部",
        path: "/index/all",
        exact: true,
        icontype:<PicRightOutlined />
    },{
        name:"精华",
        path: "/index/good",
        exact: true,
        icontype:<IssuesCloseOutlined />
    },{
        name:"招聘",
        path: "/index/job",
        exact: true,
        icontype:<ContactsOutlined />
    },{
        name:"分享",
        path: "/index/share",
        exact: true,
        icontype:<ForkOutlined />
    },{
        name:"问答",
        path: "/index/ask",
        exact: true,
        icontype: <RotateRightOutlined /> 
    },
    {
        name:"测试",
        path: "/index/dev",
        exact: true,
        icontype: <RadarChartOutlined /> 
    }
]
export { urlLists, navlists, IndexPageLists };