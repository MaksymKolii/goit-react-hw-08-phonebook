import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";
import { Form, Label, Input, Button} from '../ContactForm/ContactForm.styled';

export const LoginForm =()=>{

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
        <Form onSubmit ={handleSubmit}>
    
            <Label> Email: 
                <Input type='email' name="email" value={email} onChange={handlechange}/>
            </Label>
            <Label> Password: 
                <Input type='password' name="password" value={password} onChange={handlechange}/>
            </Label>
            <Button>Login</Button>

        </Form>
    )
}