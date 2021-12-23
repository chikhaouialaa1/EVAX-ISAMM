import React , {useEffect,useState} from 'react'
import axios from 'axios'

function AuthService(email , password) {
    const [token,settoken]=useState()
    useEffect(()=>{
          axios.post('http://localhost:4000/user/login',{ email :email,password:password }).then(res=>{    
            console.log(res.data)   
            localStorage.setItem('token', res.data); // write
             return (res.data)
        }
        ).catch(
            err=>{
            return (err)
        }
        )
    })
}
export default AuthService