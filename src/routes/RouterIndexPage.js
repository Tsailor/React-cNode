import React from 'react';
import { IndexPageLists} from './routes';
import { Switch, Route } from 'react-router-dom';
import IndexPContainer from "../containers/IndexPContainer";
function RouterIndexPage(){
    return(
        <Switch>
            {
                IndexPageLists.map( (item, indx) =>{
                    return <Route key={indx} exact={item.exact}
                                  path={item.path}
                                  component={IndexPContainer}
                    />
                })
            }
        </Switch>
    )
}
export default RouterIndexPage;