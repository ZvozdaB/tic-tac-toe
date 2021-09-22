import React from "react";

function BoxCeill({cross,zero,addPoint,id}){
    return (
        <div className="box_cell" onClick={() => addPoint(id)}>
            {cross ? <p>X</p> : null}{zero ? <p>O</p> : null}
            
        </div>
    )
}

export default BoxCeill;