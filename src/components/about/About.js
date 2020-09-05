import React, { useState, useEffect } from 'react';
import { useAboutData } from "../../http/http";
import Template from "../common/Template";
import Loading from "../common/Loading";
import style from "../../styles/about.module.css";
import { Card } from "antd"
function About( ){

    const getData = useAboutData();
    let [lists, setLists] = useState([]);
    let [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
        getData.then(res=>{
          setLists(res);
          setisLoading(false)
      })
    },[])
    return(
        <div >
            {/* { isLoading ? <Loading/> : lists && <Template data ={lists.slice(0,lists.length-1)}/> }
            <Card key={indx} title={lists[lists.length-1].title} type="inner">
                      <div className={style.aboutContent} dangerouslySetInnerHTML={
                            {
                                __html:lists[lists.length-1].content
                            }
                        }></div>
             </Card> */}

            { isLoading ? <Loading /> : lists 
                && <div>
                     <Template data={lists.slice(0, lists.length - 1)} /> 
                     <Card  title={lists[lists.length - 1].title} type="inner">
                            <div className={style.aboutContent} dangerouslySetInnerHTML={
                                {
                                    __html: lists[lists.length - 1].content
                                }
                            }/>
                     </Card> 
                  </div>}
        </div>
    )
}
export default About;