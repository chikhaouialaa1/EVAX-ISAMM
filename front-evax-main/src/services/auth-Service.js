import React , {useEffect,useState} from 'react'
import axios from 'axios'


let badpassword = false 

function AuthService(email , password) {

          axios.post('http://localhost:4000/user/login',{ email :email,password:password }).then(res=>{    
            console.log("++++",res.data)   
            localStorage.setItem('token', res.data); // write
            //this.props.history.push('/');

        }
        ).catch(
          badpassword=true,
            err=>{
              console.log("---",err)
            return (err)
        }
        )
    
}
export default AuthService
export {badpassword}
