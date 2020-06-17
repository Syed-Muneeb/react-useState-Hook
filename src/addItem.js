import React, { useState } from "react"



function Add(){

    let [items,setItems] = useState([]);

    function addItem(){

        setItems([...items,{

            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    console.log(items);

    return (

        <div>
            <h1> Add Item </h1>
        <button onClick={addItem}> Add Item </button>

        <ul>

            {items.map(function(item){

                return <li key={item.id}> {item.value} </li>
            })}

        </ul>

      </div>
    )
}


export default Add;