import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { urlLists } from './routes';
import indexStyle from '../styles/index.module.css';
function IndexRoute(){
    return(  
        <div id={indexStyle.Content}>
        <Switch>
            {urlLists.map((item,ind)=>{
                return <Route key={ind} exact={item.exact} path={item.path} render={(props)=>item.render(props)}/>
            })}
        </Switch>
        </div>    
    )
}
export default IndexRoute;