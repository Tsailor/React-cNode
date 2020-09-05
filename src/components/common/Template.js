import React from 'react';
import { Card } from 'antd';
function Template(props){
    let { data } = props;
    return(
        <div>
            {data && data.map((item,indx) => {
                return <Card key={indx} title={item.title} type="inner">
                      <div  dangerouslySetInnerHTML={
                            {
                                __html:item.content
                            }
                        }></div>
                </Card>
            })}
        </div>
    )
}
export default Template;