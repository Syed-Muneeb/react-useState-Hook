import React, { useState } from 'react';


function LoginFrom(){

    let [state,setState] = useState({

        userName : "",
        password : ""
    });

    function update(e){

        setState({ ...state,

          [e.target.name] : e.target.value,

        })
    }

    function prevent(e){

          e.preventDefault();
    }
      console.log(state)

    return(

        <form onSubmit={prevent}>
            <label> userName
            <input type="text" name="userName" value={state.userName} onChange={update}/>
            </label>

            <label> password
            <input type="password" name="password" value={state.password} onChange={update}/>
            </label>

            <input type="submit" value="submit" />
            
        </form>
    )
}

export default LoginFrom