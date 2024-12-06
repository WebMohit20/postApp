import React ,{useState} from "react";
import Lookup from "./components/Lookup";
import FetchData from "./components/FetchData";
import HandleDeatils from "./components/HandleDetails";


import "./style/app.css"
import "./style/showdetail.css";
const App = ()=>{
    let [postOffice,setPostOffice] = useState(null);
    let [ pincode,setPincode] = useState("");

    return(
        <div className="appContainer" >
           <Lookup setPincode={setPincode}/>
           {pincode && <FetchData  pincode={pincode} setPostOffice={setPostOffice} /> } 
           {postOffice && <HandleDeatils postOffice={postOffice}/> }
        </div>
    )
}

export default App;

