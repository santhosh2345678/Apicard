import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Detail=()=>{
    let [stat,setStat]=useState([])
    let [params]=useSearchParams()
    let x=(params.get('id'));
console.log(x)


    useEffect(()=>{
        fetch(' https://api.spacexdata.com/v3/launches')
      .then((response) => response.json())
      .then((json) => setStat(json));
    
     },[])
    
         let y= stat.filter((value,index)=>{
            return parseInt(x)===value.flight_number?value:"";
          })
        


    return(
        <div>

            <div className="cal">
{y.map((v,i)=>{
          return   <div className="col">
                    <div className="card">
                    <h2>{v.flight_number}</h2>
                    <img src={v.links.mission_patch_small} style={{width:"200px",height:"200px"}}></img>
                    <h1  style={{color:"yellow"}}>{v.mission_name}</h1>
                    <p>{v.details}</p>
                    

                    </div>
                    </div>
                    })}
        </div>

        </div>
    )
}


export default Detail;