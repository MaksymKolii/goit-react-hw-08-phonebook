import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { selectName} from "redux/auth/auth-selectors";
import {ButtonB} from '../Button/Button.styled'
import { Box } from '@mui/material';
import { P } from "./UserAuthMenu.styled";


export const UserAuthMenu =()=>{

const dispatsh = useDispatch()
const name = useSelector(selectName)
    return (
    <Box sx={{ display: 'flex', justifyContent: 'center' , alignItems:'center'}}>
    <P>{`Welcome, ${name}!`}</P>
    <ButtonB onClick={()=>dispatsh(logout())}>Logout</ButtonB>
    
    </Box>)
}

