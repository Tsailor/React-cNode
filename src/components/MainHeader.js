import React, { useState } from 'react';
import indexStyle from '../styles/index.module.css';
import style from '../styles/header.module.css';
import { Layout ,Col, Row, Divider, Dropdown} from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import Nav from './common/Nav';
function MainHeader(){
    
    const [visible, SetVisible] = useState(false);
    const handleMenuClick = (e)=>{
        //console.log(e)
        if(e.key){
            SetVisible(false)
        }
    }
    const handleVisibleChange = (flag)=>{
          SetVisible(flag)
    }
    const NavMenu= (<Nav modeStatus="vertical" handleMenuClick={(e)=>handleMenuClick(e)}/>)
    return(
        <Layout.Header id={indexStyle.Header}>
             <Row justify="space-between">
                 <Col sm={6} xs={18}>    {/*logo*/}
                     <div className={style.logo}>cNode</div>
                 </Col>
                 <Col sm={0} xs={6}>     {/* 移动端 菜单栏  点击打开导航栏*/}
                    <Dropdown overlay={NavMenu} trigger={['click']} placement="bottomRight"
                         onVisibleChange={(e)=>handleVisibleChange(e)}
                         visible={visible}
                    >
                        <a className={style.dropdown} onClick = {e => e.preventDefault()}>
                         <AlignLeftOutlined className={style.meunIcon} />
                        </a>
                    </Dropdown>
                 </Col>
                 <Col sm={18} xs={0} id={style.wrap}>    {/* 导航栏 */}
                    <Divider type="vertical" className={style.divider}/>
                    <Nav modeStatus ="horizontal" />     {/* 导航栏 */}
                 </Col>
             </Row>
        </Layout.Header>
    )
}
export default MainHeader;