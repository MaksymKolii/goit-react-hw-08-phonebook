import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { selectName} from "redux/auth/auth-selectors";
import { Box } from '@mui/material';


export const UserAuthMenu =()=>{

const dispatsh = useDispatch()
const name = useSelector(selectName)
    return (
    <Box>
    <p>{`Welcome, ${name} !`}</p>
    <button onClick={()=>dispatsh(logout())}>Logout</button>
    
    </Box>)
}

