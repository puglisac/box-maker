import React from 'react';
import Box from './box';
import NewBoxForm from './NewBoxForm';

const BoxList = ()=> {
    const boxes=[];

    const addBox=(width, height, color)=>{
        boxes.push({width, height, color})
    }

    return(
        <>
        {boxes.map((b, i)=>  (
            <Box key={i} width={b.width} height={b.height} color={b.color}/>))}
        <NewBoxForm addBox={addBox}/>
        </>
    )
}
export default BoxList;
