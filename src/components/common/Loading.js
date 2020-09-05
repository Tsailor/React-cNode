import { Spin } from 'antd';
import React from 'react';
function Loading(){
    let style = {
        position:"absolute",
        top:"30%",
        left:"50%",
        transform:"translate(-50%,-50%)"
    }
    return(
        <Spin style={style}  tip="Loading..." size="large" > 
        </Spin>
    )
}
export default Loading;