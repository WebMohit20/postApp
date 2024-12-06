import React,{useEffect, useState} from "react";
import axios from 'axios';
const FetchData = ( { pincode,setPostOffice } )=>{
    // let [data,setData] = useState([]);
    let [error,setError] = useState(null);
    function getData(){
        axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then( (response)=> {
            console.log(response?.data[0])
            let res = response?.data[0] 
            //  setData(response?.data[0] )
             setPostOffice(res);
        })
        .catch( (err)=>{
            // console.log(err)
            return setError(err)
        } )
        
    }

    useEffect(()=>{
        getData()
        
        
    },[pincode])


    // return (
    //     <div>
    //         {data.length ? data.map( (office)=>{
    //            return <p> {office} </p>
    //         } ):null }
    //     </div>
    // )
}

export default FetchData;