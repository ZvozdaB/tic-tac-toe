import React from "react";
import { useDispatch } from 'react-redux'
import { addPoint,checkIfWon } from "../Redux/Slice";

function BoxCeill({cross,zero,id}){
    const dispatch = useDispatch()
    return (
        <div className="box_cell" onClick={() => { dispatch(addPoint(id)); dispatch(checkIfWon()) }}>
            {cross ? <p>X</p> : null}{zero ? <p>O</p> : null}
            
        </div>
    )
}

export default BoxCeill;