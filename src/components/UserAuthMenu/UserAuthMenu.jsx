import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { selectName} from "redux/auth/auth-selectors";


export const UserAuthMenu =()=>{

const dispatsh = useDispatch()
const name = useSelector(selectName)
    return (<>
    <p>{`Welcome, ${name} !`}</p>
    <button onClick={()=>dispatsh(logout())}>Logout</button>
    
    </>)
}

