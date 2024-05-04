import React from "react";
const Card = () =>{
    const names=["Create Story","Friend 1","Friend 2","Friend 3"]
    console.log(names)
    return(
        <div className="card">
            {names.map((item,index)=>(
                <button 
                className="cardbtn" key={index}>
                    <div className="text">
                        {item}
                    </div> 
                </button>
            ))
            }
        </div>
    )
}
export default Card;