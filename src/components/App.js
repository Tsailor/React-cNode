import {BrowserRouter as Router } from 'react-router-dom';
import MainHeader from './MainHeader';
import RouterIndex from '../routes/RouterIndex'
import MainFooter from './MainFooter';
import React from 'react';
function App(){
    return(
        <Router>
            <MainHeader />
            <RouterIndex />
            <MainFooter />
        </Router>
       
    )
}
export default App;