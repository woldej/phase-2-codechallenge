import React from "react";

function Form(){
    
return(<>
    <form style={{margin:"10px",padding:"10px"} }>
        <label htmlFor="date">Date :</label>
        <input type="date" id="date"/><br/>
        <label htmlFor="date">Description :</label>
        <input type="text" id="date"/><br/>
        <label htmlFor="date">Category :</label>
        <input type="text" id="date"/><br/>
        <label htmlFor="date">Amount :</label>
        <input type="text" id="date"/><br/>
            <button>Submit</button>    </form></>
)
}
export default Form;