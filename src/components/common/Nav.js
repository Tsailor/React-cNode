import React from 'react';
import { navlists } from '../../routes/routes';
import { Menu} from 'antd';
import { NavLink } from 'react-router-dom';
import style from "../../styles/header.module.css";
function Nav(props){
    let { modeStatus ,handleMenuClick} = props;
    return (
    <Menu id={style.navMenu} mode={modeStatus} onClick={handleMenuClick ? (e)=>handleMenuClick(e) : ()=>null}>
         {navlists.map((item,index) =>
              <Menu.Item key={index} icon={item.icontype} id={style.navmenuItem}> 
                            <NavLink key={index} exact={item.exact} to={item.path} id={style.navlink}
                                 activeClassName={item.activeClass}>{item.name}
                            </NavLink>
               </Menu.Item>
         )}
    </Menu>
    )
}
export default Nav;