import React, { useState } from 'react'



function Step(){

    let [step,setStep] = useState(0);

    function update(){

        setStep(prevState => prevState + 1 );
    }

    return (

        <div>
            <p> i have taken {step} steps </p>
            <button onClick={update}> i took another step </button>
        </div>
    )
}
    export default Step;
