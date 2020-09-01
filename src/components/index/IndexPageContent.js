import React from 'react';
function IndexPageContent(props){
    let {path} = props.match;
    let reg=/\b\w+$/g;
    let tab = path.match(reg)[0];
    console.log(tab)
    return(
        <div>IndexPageContent</div>
    )
}
export default IndexPageContent;