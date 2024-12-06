import React from "react";

const ShowDetails = ( {office} )=>{
   

    return (
        <div className="showDetails" >
           <p className="name" > <span>Name: </span>{office.Name} </p>
           <p className="branch" > <span>Branch Type:</span>  {office.BranchType} </p>
           <p className="delivery" > <span>Delivery Status: </span> {office.DeliveryStatus} </p>
           <p className="district" ><span> District: </span> {office.District} </p>
           <p className="division" > <span>Division: </span> {office.Division} </p>
        </div>
    )
}

export default ShowDetails;