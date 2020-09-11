import React from 'react';
import './Box.css';
const Box = ({id, width, height, color, deleteBox}) => {
    return (
        <div className="Box">
        <div id={id} style={{width: width, height: height, backgroundColor: color}} data-testid="box">
        </div>
        <button onClick={()=>deleteBox({id, width, height, color})}>X</button>
        </div>
    )
}
export default Box