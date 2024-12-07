import React,{useEffect, useState} from "react";
import axios from 'axios';
const FetchData = ( { pincode,setPostOffice } )=>{
    let [error,setError] = useState(null);
    function getData(){
        axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then( (response)=> {
            let res = response?.data[0] 
             setPostOffice(res);
        })
        .catch( (err)=>{
            return setError(err)
        } )
        
    }

    useEffect(()=>{
        getData()
    },[pincode])
}

export default FetchData;