import React ,{useContext} from "react";
import userContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(userContext)
    if (!user) return <di>Please Login</di>
    
    return <div>Welcome {user. userName}</div>
}


export default Profile