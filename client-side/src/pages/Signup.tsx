import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assests/logo.png"
import IndexPage from "@/components/IndexPage";
const Signup = () => {
  const [style,setStyle]=useState({})
  const [namedata,setNamedata]=useState({
    name:"",
    email:"",
    password:""
  })
  const getDataFun = (e:any) =>{
    const {value,name}=e.target;
    setNamedata((obj)=>{
      return({
        ...obj,
        [name]:value

      })
    })
  }
  const submitFun = async(e:any) =>{
    e.preventDefault()
    let result:Response = await fetch('http://localhost:8000/signup',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({...namedata})
    })
    result = await result.json()
    if(result){
      localStorage.setItem('signup',JSON.stringify(result))
      setStyle({
        "display":"block"
      })
      setTimeout(()=>{
        setStyle({
          "display":"none"
        })
      },1000)
      console.log('signUp')
    }else{
      console.log('Not SignUP');
      
    }
    
    
  }
  
  return (
    <div className="superMain">
    <IndexPage/>
     <nav>
      <Link href={'/'}>
          <Image className="logo" src={logo} alt="logo"  />
          </Link>
          </nav>
    <div className="signMain">
      <form className="signForm" onSubmit={submitFun}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" name="name" onChange={getDataFun} />
        <input type="email" placeholder="Email or phone number" name="email" onChange={getDataFun} />
        <input type="password" placeholder="PassWord" name="password" onChange={getDataFun} />
        <button>Sign Up</button>
        <div className="remembermeneedhelpMain">
          <div className="rememberme">
            <input type="checkbox" name="rememberme" id="rememberme" />
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <Link href={"https://www.netflix.com/in/LoginHelp"}>Need help?</Link>
        </div>
      </form>
      
        <div className="signupbtnboxmain">
         <div className="signupbtnbox">
          <p>New to Netflix?</p>
          <Link href={'/Login'}>Sign In now.</Link>
         </div>

            <p className="learnmore">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        
        </div>
    </div>
        <div className="alertBox" style={style}>
          <p>SignUp Succesfully ✔</p>
        </div>
    </div>
  );
};

export default Signup;
