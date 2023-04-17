import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assests/logo.png";
import Image from "next/image";
import IndexPage from "@/components/IndexPage";


const Login = () => {
  const [emailpass,setEmailpass]=useState({
    email:"",
    password:""
  })
 
  
  const getDataFun = (e:any) =>{
    const {value,name}=e.target;
    setEmailpass((obj)=>{
      return({
        ...obj,
        [name]:value
      })
    })
  }
  const submitFun = async(e:any)=>{
    e.preventDefault()
    let result = await fetch('http://localhost:8000/login',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({...emailpass})
    })
    result = await result.json()
     localStorage.setItem('user',JSON.stringify(result))
    
    console.log(result);
    

  }
  return (
    <div className="superMain">
    <IndexPage/>
       <nav>
       <Link href={'/'}>
          <Image className="logo" src={logo} alt="logo" />
          </Link>
          </nav>
       
      <div className="signMain">
        <form className="signForm" onSubmit={submitFun}>
          <h2>LogIn</h2>
          <input type="email" placeholder="Email or phone number" name="email" onChange={getDataFun}/>
          <input type="password" placeholder="PassWord" name="password" onChange={getDataFun}/>
          <button>LogIn</button>
          <div className="remembermeneedhelpMain">
            <div className="rememberme">
              <input type="checkbox" name="rememberme" id="rememberme"  />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <Link href={"https://www.netflix.com/in/LoginHelp"}>
              Need help?
            </Link>
          </div>
        </form>

        <div className="signupbtnboxmain">
          <div className="signupbtnbox">
            <p>New to Netflix?</p>
            <Link href={"/Signup"}>Sign Up now.</Link>
          </div>

          <p className="learnmore">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
