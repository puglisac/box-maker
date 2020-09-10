import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = ()=> {
    const [boxes, setBoxes]=useState([]);

    const addBox=( data )=>{
        const{width, height, color}=data;
        const id = uuidv4();
        setBoxes(boxes=>[...boxes,{id, width, height, color}])
    }

    const deleteBox=(box)=>{
        console.log(box);
        const idx = boxes.indexOf(box);
        console.log(idx)
        boxes.splice(idx,1);
        setBoxes(boxes=>[...boxes])
    }

    return(
        <>
        <NewBoxForm addBox={addBox}/>
        <div className="BoxList">
        {boxes.map(b=>  (
            <Box key={b.id} 
            width={b.width} 
            height={b.height} 
            color={b.color} 
            id={b.id}
            deleteBox={deleteBox}/>))}
            </div>
        
        </>
    )
}
export default BoxList;
