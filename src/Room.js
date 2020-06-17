import React, { useState } from 'react';
import './room.css';


// let get = React.useState(true);
// let isLit = get[0];
// let setLit = get[1];

// console.log(isLit);
// console.log(setLit);

// let state = useState(true);   // here it return a new array with two value
// console.log(state);          //  one with true which we and another is a function



        // function ageIncrease(){

        //     setAge(++age)
        // }

            // function ageDicrease(){

            //     setAge(--age)
            // }

function Room(){

    let [isLit , setLit ] = useState(true);
    let [age , setAge] = useState(16);
   
    function updateLit(){

            setLit(!isLit);
            console.log(' button click ');
    }

    return (

         <div className = { `room ${isLit ? "lit" : "dark"} ` } > 

             This Room is  {isLit ? "Lit" : "Dark"}  
             <br/> <br/>

             <button onClick={updateLit} >Toggle Light </button> 
             <br/> <br/>

            Age : {age}  <br/> <br/>

             <button onClick = {()=> {

                                setAge(++age);
                                console.log("age increament")

                   }} >  increament Age 
              </button> 

            <button onClick = {()=>{

                        console.log("age dicreament");
                        setAge(--age);

                     }} > Dicrease Age
             </button>


        </div>
    )
}   

export default Room;