import { useState } from "react";
import './App.css';
import BoxCeill from "./tic-tac/BoxCaill";
import WinScrin from "./tic-tac/WinScrin";

function App() {
  let [state, setState] = useState([
    { id: 1, cross: false, zero: false },
    { id: 2, cross: false, zero: false },
    { id: 3, cross: false, zero: false },
    { id: 4, cross: false, zero: false },
    { id: 5, cross: false, zero: false },
    { id: 6, cross: false, zero: false },
    { id: 7, cross: false, zero: false },
    { id: 8, cross: false, zero: false },
    { id: 9, cross: false, zero: false },
  ])
  let [counter,setCounter] = useState(0)
  let [win,setWin] = useState("")


  function addPoint(id){
    setState(
      state.map(item => { 
        if(item.id === id){
          if (counter % 2 === 0 && !item.zero && !item.cross){
            item.cross = true
            setCounter(++counter)
          } else if (counter % 2 !== 0 && !item.cross && !item.zero) {
            item.zero = true
            setCounter(++counter)
          }
        }
        return item;
      }));
  }

  function checkIfWon(){
    const winComb = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for (let i = 0; i < winComb.length; i++){
      let [a,b,c] = winComb[i];
      if (state[a].cross && state[b].cross && state[c].cross){
        setWin("X");
        break;   
      }
      if (state[a].zero && state[b].zero && state[c].zero) {
        setWin("O");
        break;
      }
    }
  }
  
  function restart(){
    setState(state.map(item => {item.cross = false; item.zero = false; return item}))
    setCounter(0);
    setWin("")
  }

  
  return (
    <div>
      <div className="turn">Turn is: {counter % 2 !== 0 ? "O" : "X"}</div>
      <div className="box" >
        {
          state.map(item => <BoxCeill key={item.id} cross={item.cross} zero={item.zero} id={item.id} addPoint={addPoint}/>)
        }
      </div>
      <div className="btn_restart" onClick={restart}>Restart</div>
      {win && <WinScrin restart={restart} win={win}/>}
      {win || checkIfWon()}
    </div>
  );
}

export default App;
