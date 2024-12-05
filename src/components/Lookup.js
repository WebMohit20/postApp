import React,{useState} from "react";

const Lookup = ()=>{
    let [ pincode,setPincode] = useState("");
    let [ code,setCode ] = useState("")
    function handlePincode(e){
        e.preventDefault();
        if(code.length==6 )
            setPincode(code)
        else{ 
            alert("You entered worng pincode") 
            return ;
        };
        setCode("");
    }
    function getCode(e){
        let value = e.target.value;
         setCode(value);
        
    }
    return (
        <div>
            <form onSubmit={handlePincode}>
                <input type="number" value={code} onChange={getCode}/>
                <button type="submit"> Lookup </button>
            </form>
        </div>
    )
}

export default Lookup;