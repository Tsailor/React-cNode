import React from 'react';
import { Layout } from 'antd';
import indexStyle from '../styles/index.module.css';
function MainFooter(){
    return(
        <Layout.Footer id={indexStyle.Footer}>
            京ICP备08102442号-1 2007-2020 MIAOV.COM 版权所有
        </Layout.Footer>
    )
}
export default MainFooter;