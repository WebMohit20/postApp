import React from "react";
import ShowDetails from "./ShowDetails";

import { v4 as uuidv4 } from 'uuid';
const HandleDeatils = ( {postOffice} )=>{

    return (
        <div className="handleDeatails" >
            <p> Pincode: {postOffice.PostOffice[0].Pincode} </p>
            <p>Message: {postOffice.Message}</p>
            <div className="detailCard"> 
                {postOffice?.PostOffice.map( office=>{
                    // console.log(office);
                    return <ShowDetails office={office} key={uuidv4()} />
                })}
            </div>
        </div>
    )
}

export default HandleDeatils;