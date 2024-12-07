import React, { useState } from "react";
import ShowDetails from "./ShowDetails";

import { v4 as uuidv4 } from 'uuid';
const HandleDeatils = ( {postOffice,pincode} )=>{

    let [name,setName] = useState("");
    function filter(e){
        let value = e.target.value;
        setName(value);
        
        
    }
    return (
        <div className="handleDeatails" >
            <div className="handleDeatails-header">
                <p > Pincode: {pincode} </p>
                <p>Message: <span>{postOffice?.Message}</span></p>
            </div>
            <div className="filter">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                <input type="text" placeholder="Filter" onChange={filter} value={name} />
            </div>
            <div className="detailCard"> 
                {postOffice?.PostOffice?.filter((item)=>{
                    return name?item?.Name?.toLowerCase().includes(name):item;
                }) .map( office=>{
                    return <ShowDetails office={office} key={uuidv4()} />
                })}
            </div>
        </div>
    )
}

export default HandleDeatils;