import { useDispatch } from "react-redux"
import { restart } from "../Redux/Slice"

function WinScrin(props){
    let dispatch = useDispatch()
    return (
    <div className="winScrin">
        <div className="win__box">
            <p>Перемогли: {props.win}</p>
            <div className="btn_restart" onClick={() => dispatch(restart())}>Restart</div>
        </div>
    </div>
    )
}

export default WinScrin