import React , {useEffect,useState} from 'react'
import Axios from 'axios'

 
export const inscription = async (user) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",user)
  const result = await Axios.post(
    "https://evaxtest.herokuapp.com/VaccinCenter",
    user
  )
  return result.data
}
let badpassword = false 
/*
function AuthService(email , password) {

          axios.post('https://evaxtest.herokuapp.com/user/login',{ email :email,password:password }).then(res=>{    
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
export default AuthService*/
export {badpassword}
