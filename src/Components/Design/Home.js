import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




function Api(){
    let [state,setState]=useState([])
 console.log(state)

  let [page,setPage]=useState([])   

  let [count,setCount]=useState()
  let [post,setPost]=useState()
  let [fet,setFet]=useState()

  let [sta,setSta]=useState()

let a=useNavigate()

 useEffect(()=>{

  setPost((sta-1)*count);

    fetch(' https://api.spacexdata.com/v3/launches')
  .then((response) => response.json())
  .then((json) => setState(json));

    fetch(` https://api.spacexdata.com/v3/launches?limit=${count}?&offset=${post}`)
  .then((response) => response.json())
  .then((json) => setPage(json));

  setFet(parseInt(state.length/count))

 },[count,post,fet])


const Detail=(id)=>{
    console.log(id)
a(`/Detail?id=${id}`)
}

    const handle=(e)=>{
setCount(e.target.value)
    }
      const handleChange = (e, v) => {
    setPost((v-1)*count);

        console.log(e,v)
  };

const ascendingbtn=()=>{

  let c=page.sort((x,z)=>{
    return x.flight_number-z.flight_number
   
  })
   setState(...c)
   console.log(c)
}

const Descendingbtn=()=>{
  let d=page.sort((a,b)=>{
    return b.flight_number-a.flight_number
  })
   setState([...d])
   console.log(d)

}
const ascendbtn=()=>{
  let x=page.sort((e,f)=>{
    return e.mission_name.localeCompare(f.mission_name)
  })
  setState([...x])
  console.log(x)
}

const Descendbtn=()=>{

  let xy=page.sort((e,f)=>{
    return f.mission_name.localeCompare(e.mission_name)
  })
  setState([...xy])
  console.log(xy)

}

    return(
<div>
    <div>
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={count}
          label=""
          onChange={handle}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>    
        </Select>
      </FormControl>
    </Box>
    </div>

<button onClick={ascendingbtn} className="a1">Ascending Number button</button>
<button onClick={Descendingbtn} className="a2">Descending Number button</button>
<button onClick={ascendbtn} className="a3">Ascending Name button</button>
<button onClick={Descendbtn} className="a4">Descending Name button</button>

        <div className="row">
 {page.map((v,i)=>{
                return <div className="col-3">
                    <div className="card">
                    <h2>{v.flight_number}</h2>
                    <img src={v.links.mission_patch_small} style={{width:"200px",height:"200px"}}></img>
                    <h1  style={{color:"yellow"}}>{v.mission_name}</h1>
                    

                    
                        <button className="viewbtn"><a href={v.links.wikipedia}>View</a> </button>                 
                    <button onClick={()=>Detail(v.flight_number)} className="Detailbtn">Detail</button>                    
                    </div>
                    </div>
            })
            }
        </div>
        <Stack spacing={2}>
            <Pagination count={fet} onChange={handleChange} />
        </Stack>
        </div>
    )
}


export default Api;