import { useUser } from "../Context/UserContext"
const LoginButton = ()=>{
const {login}= useUser();
    return(
        <button onClick={()=> login('Shavan')}>Login as Shravan</button>
    )
}

export default LoginButton