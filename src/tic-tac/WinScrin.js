function WinScrin(props){
    return (
    <div className="winScrin">
        <div className="win__box">
            <p>Перемогли: {props.win}</p>
            <div className="btn_restart" onClick={props.restart}>Restart</div>
        </div>
    </div>
    )
}

export default WinScrin