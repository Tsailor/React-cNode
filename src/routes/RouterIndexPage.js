import React from 'react';
import { IndexPageLists} from './routes';
import { Switch, Route } from 'react-router-dom';
import IndexPageContent from "../components/index/IndexPageContent"
function RouterIndexPage(){
    return(
        <Switch>
            {
                IndexPageLists.map( (item, indx) =>{
                    return <Route key={indx} exact={item.exact}
                                  path={item.path}
                                  component={IndexPageContent}
                    />
                })
            }
        </Switch>
    )
}
export default RouterIndexPage;