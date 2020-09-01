import React, { useState, useEffect } from 'react';
import { useAboutData } from "../../http/http";

function About( ){

    const aboutData = useAboutData();
    let [lists, setLists] = useState([]);
    let [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
      aboutData.then(res=>{
          setLists(res);
          setisLoading(false)
      })
    },[])
    return(
        <div>
             { isLoading ? <div>Loading</div> : <div>about</div> }
             {console.log(lists)}
        </div>
       
    )
}
export default About;