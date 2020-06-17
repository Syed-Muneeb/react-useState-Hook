import React, { useState } from 'react'


function Test({text,maxLength}){

    let [set,setText] = useState(true);

    if(text.length <= maxLength){

        return <span> {text} </span>
    }

    return (

        <span>

            {set ? `${text.substr(0,maxLength)}` : text}

            {set ? ( <span onClick={()=>setText(false)}> read more </span> 
            ):(
            <span onClick={()=>setText(true)}> read Less </span> )}

        </span>
    )
}

export default Test