import React from "react";

function TableRow({id,date,description,category,amount}){
    return(<tr style={{border: "3px solid rgb(0, 0, 0)"}}>

        <td id={id}>{id}</td>
        <td id={date} >{date}</td>
        <td id={description} >{description}</td>
        <td id={category} >{category}</td>
        <td id={amount} >{amount}</td>
        <button id="update" >Update</button>
        <button id="delete" >Delete</button>

      </tr>  )}

export default TableRow;