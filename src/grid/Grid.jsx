import "./Grid.css" ;

function Grid({value, onClick}) {
    return (
        <div className="grid-wrapper" onClick={onClick}>
            <span className="grid-value">{value}</span>
        </div>
    )
}

export default Grid;