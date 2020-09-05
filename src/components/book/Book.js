import React, { useState, useEffect } from 'react';
import { useBookData } from "../../http/http";
import Template from "../common/Template";
import Loading from "../common/Loading";
function About( ){

    const getData = useBookData();
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
             { isLoading ? <Loading/> : lists&&<Template data ={lists}/> }
        </div>
       
    )
}
export default About;