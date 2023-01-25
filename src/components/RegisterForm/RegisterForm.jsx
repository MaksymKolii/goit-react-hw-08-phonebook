import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { Form, Label, Input, Button} from '../ContactForm/ContactForm.styled';

export const RegisterForm =()=>{
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
        <Form onSubmit ={handleSubmit}>
            <Label> Name: 
                <Input type='text' name="name" value={name} onChange={handlechange}/>
            </Label>
            <Label> Email: 
                <Input type='email' name="email" value={email} onChange={handlechange}/>
            </Label>
            <Label> Password: 
                <Input type='password' name="password" value={password} onChange={handlechange}/>
            </Label>
            <Button>Register</Button>

        </Form>
    )
}