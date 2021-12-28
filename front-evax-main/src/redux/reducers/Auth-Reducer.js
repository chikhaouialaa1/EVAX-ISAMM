//import { Mylist } from "../services/user-list"
import AuthService from "../../services/auth-Service"



const AuthReducer=(initiallist=[],actions)=>{

    switch(actions.type){
            case "userlogin" :
                //console.log(actions)
                //console.log(actions.email,actions.password)
                AuthService(actions.email,actions.password)
            //let newlist=initiallist.splice(1,initiallist.length-1)
            //return newlist

            case "test" :
                console.log("test case")  
                
                //let newlist=initiallist.splice(1,initiallist.length-1)
                //return newlist

        default:
            return initiallist
    }
}


export default AuthReducer