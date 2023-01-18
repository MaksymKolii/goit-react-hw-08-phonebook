import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";

export const Loginform =()=>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const dispatch = useDispatch();
const handleSubmit =(ev)=>{

    ev.preventDefault()
    dispatch(login({email, password}))
  
    setEmail('')
    setPassword('')
}

const handlechange =({target:{name, value}})=>{

switch (name) {

        case 'email':
        setEmail(value)
        break;
        case 'password':
            setPassword(value)
        
        break;

    default:
        break;
}

}

    return (
        <form onSubmit ={handleSubmit}>
    
            <label> Email: 
                <input type='email' name="email" value={email} onChange={handlechange}/>
            </label>
            <label> Password: 
                <input type='password' name="password" value={password} onChange={handlechange}/>
            </label>
            <button>Login</button>

        </form>
    )
}