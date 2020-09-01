import React, { Component } from 'react';
import RouterIndexPage from "../../routes/RouterIndexPage";
import style from "../../styles/indexPage.module.css"
import { Layout, Col, Row, Menu } from 'antd';
import { IndexPageLists } from "../../routes/routes";
import { NavLink } from 'react-router-dom';
const menu = (props)=>{
    let {mode} = props;
    return <Menu id={style.menunav} mode={mode}>
            {IndexPageLists.map((item, indx) => {
            return <Menu.Item key={indx} id={style.navItem} icon={item.icontype}>
                        <NavLink id={style.navlinka} key={indx} to={item.path} exact={item.exact}>{item.name}</NavLink>
                    </Menu.Item>
            })}
        </Menu>
}

const withMenuHoc = (Compon)=>{
    return class extends Component {
        render(){ 
            return <Compon {...this.props}/>
        }
    }
}
const WithMenu = withMenuHoc(menu);

function IndexPage(){
   
    return(
        <Layout.Content >
             <Row >
                 <Col sm={6} xs={0}>
                     {/* <Menu mode='vertical' id={style.menunav}>
                         { IndexPageLists.map( (item,indx)=>{
                             return <Menu.Item key={indx} icon={item.icontype} id={style.navItem}>
                                  <NavLink id={style.navlinka} key={indx} to={item.path} exact={item.exact}>{item.name}</NavLink>
                              </Menu.Item>
                         })}
                     </Menu> */}
                     <WithMenu mode='vertical' />   {/*代码抽离出来，高阶组件*/}
                     
                 </Col>
                 <Col sm={0} xs={24}>  {/*移动端*/}
                     {/* <Menu mode='horizontal' id={style.menunav}>
                         { IndexPageLists.map( (item,indx)=>{
                             return <Menu.Item key={indx}  id={style.navItem} icon={item.icontype}>
                                  <NavLink id={style.navlinka} key={indx} to={item.path} exact={item.exact}>{item.name}</NavLink>
                    
                              </Menu.Item>
                         })}
                     </Menu> */}
                     <WithMenu mode='horizontal'/>
                 </Col>
                 <Col sm={18} xs={24}>
                     <RouterIndexPage />
                 </Col>
             </Row>
        </Layout.Content>
    )
}
export default IndexPage;