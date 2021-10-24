import { useState } from "react";
import './App.css';
import BoxCeill from "./tic-tac/BoxCaill";
import WinScrin from "./tic-tac/WinScrin";
import { useSelector, useDispatch } from 'react-redux'
import { restart } from "./Redux/Slice";

function App() {
  const dispatch = useDispatch()
  
  let win = useSelector(state => state.tic.win)
  let state = useSelector(state => state.tic.stateTic)
  let counter = useSelector(state => state.tic.counter)
 
  
  return (
    <div>
      <div className="turn">Turn is: {counter % 2 !== 0 ? "O" : "X"}</div>
      <div className="box" >
        {
          state.map(item => <BoxCeill key={item.id} cross={item.cross} zero={item.zero} id={item.id} />)
        }
      </div>
      <div className="btn_restart" onClick={() => dispatch(restart())}>Restart</div>
      {win && <WinScrin  win={win}/>}
    </div>
  );
}

export default App;
