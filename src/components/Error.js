import React from 'react';
function Error(){
    return( 
        <div style={{fontSize:"26px"}}>
            <p style={{textAlign:"center"}}>404</p>
            <p style={{textAlign:"center"}}>请检查正确的url, for example, <a href="http://localhost:8080/index/">http://localhost:8080/index/</a></p>
            <p style={{textAlign:"center"}}>or you can click here <a href="http://localhost:8080/index/">home</a></p>
        </div>
    
    )
}
export default Error;

