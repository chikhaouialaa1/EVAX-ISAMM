//import { Mylist } from "../services/user-list"
import AuthService from "../services/auth-Service"



const AuthReducer=(initiallist=[],actions)=>{
    console.log("auth reduicer")
    switch(actions.type){
            case "userlogin" :
                console.log(actions)

        
            case "delete" :
            //console.log(Mylist)  
            console.log(actions.email,actions.password)
            AuthService(actions.email,actions.password)
            
            /*
            AuthService("mayssamelliti@gmail.com","123")
            console.log("teeessstttt")  
            let res =  AuthService("mayssamelliti@gmail.com","123")
            console.log(res)
            console.log(AuthService("mayssamelliti@gmail.com","123"))
            */
    
        //return Mylist.splice(Mylist.length-1, 1)
            let newlist=initiallist.splice(1,initiallist.length-1)
            return newlist

        default:
            return initiallist
    }
}


export default AuthReducer