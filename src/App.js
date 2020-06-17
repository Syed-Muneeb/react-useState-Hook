import React from 'react'
import './App.css';
import Room from './Room';
import Test from './demo';
import Step from './Step';
import Add from "./addItem"
import LoginForm from './ObjectState'



function App(){

    return (

        <div className="container">
              <Room />

                <br/>

            <h3> Paragraph </h3>

              <Test 

                text="hello my name is muneeb and learning react useState hooks"
                maxLength={30} />

                   <br/> 

            <h3> Step tracking with prevous step !</h3>

                 <Step />

              <br/>

                 <Add/>
                 
              <br/>
              <LoginForm/>
              
        </div>
    )
}

export default App;