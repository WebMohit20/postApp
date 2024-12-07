import React ,{useState} from "react";
import Lookup from "./components/Lookup";
import FetchData from "./components/FetchData";
import HandleDeatils from "./components/HandleDetails";
import Loader from "./components/Loader";
import "./style/app.css"

const App = ()=>{
    let [postOffice,setPostOffice] = useState(null);
    let [ pincode,setPincode] = useState("");
    let [toggle,setToggle] = useState(true);
    let [toggleLoader,setToggleLoader] = useState(true);
    return(
        <div className="appContainer" >
           { toggle && <Lookup setPincode={setPincode} setToggle={setToggle} />}
           { toggleLoader&&pincode&&!postOffice&&<Loader /> }
           {pincode && <FetchData  pincode={pincode} setPostOffice={setPostOffice} setToggleLoader={setToggleLoader} /> } 
           {postOffice && <HandleDeatils postOffice={postOffice} pincode={pincode} /> }
        </div>
    )
}

export default App;

