import React from "react";

const ShowDetails = ( {office} )=>{
   

    return (
        <div className="showDetails" >
           <p className="name" > Name: {office.Name} </p>
           <p className="branch" > Branch Type:  {office.BranchType} </p>
           <p className="delivery" > Delivery Status:  {office.DeliveryStatus} </p>
           <p className="district" > District:  {office.District} </p>
           <p className="division" > Division:  {office.Division} </p>
        </div>
    )
}

export default ShowDetails;