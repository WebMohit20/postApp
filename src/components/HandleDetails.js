import React from "react";
import ShowDetails from "./ShowDetails";

import { v4 as uuidv4 } from 'uuid';
const HandleDeatils = ( {postOffice} )=>{

    return (
        <div className="handleDetails">
            {postOffice?.PostOffice.map( office=>{
                // console.log(office);
                return <ShowDetails office={office} key={uuidv4()} />
            })}
        </div>
    )
}

export default HandleDeatils;