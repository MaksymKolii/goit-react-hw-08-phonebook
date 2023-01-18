import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";

export const Registerform =()=>{
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const dispatch = useDispatch();
const handleSubmit =(ev)=>{

    ev.preventDefault()
    dispatch(register({name, email, password}))
    setName('')
    setEmail('')
    setPassword('')
}

const handlechange =({target:{name, value}})=>{

switch (name) {
    case 'name':
        setName(value)
        break;
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
            <label> Name: 
                <input type='text' name="name" value={name} onChange={handlechange}/>
            </label>
            <label> Email: 
                <input type='email' name="email" value={email} onChange={handlechange}/>
            </label>
            <label> Password: 
                <input type='password' name="password" value={password} onChange={handlechange}/>
            </label>
            <button>Register</button>

        </form>
    )
}