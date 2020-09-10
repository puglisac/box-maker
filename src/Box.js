import React from 'react';

const Box = ({id, width, height, color, deleteBox}) => {
    return (
        <div className="Box">
        <div id={id} style={{width: width, height: height, backgroundColor: color}}>
        </div>
        <button onClick={()=>deleteBox({id, width, height, color})}>X</button>
        </div>
    )
}
export default Box