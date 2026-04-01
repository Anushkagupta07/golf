import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

 const navigate = useNavigate();

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [msg,setMsg] = useState("");

 const loginUser = async()=>{

  try{

   const res = await axios.post(

    "https://golf-backend-n06r.onrender.com/api/login",

    {
     email,
     password
    }

   );

   /*
   store full response
   */
   localStorage.setItem(

    "user",

    JSON.stringify(res.data)

   );

   setMsg("Login successful");

   setTimeout(()=>{

    navigate("/dashboard");

   },800);

  }

  catch(error){

   setMsg("Invalid email or password");

  }

 };

 return(

  <div className="auth-container">

   <div className="auth-box">

    <h1>Login</h1>

    <input
     type="email"
     placeholder="Email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
    />

    <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
    />

    <button onClick={loginUser}>
     Login
    </button>

    <p className="msg">
     {msg}
    </p>

   </div>

  </div>

 );

}

export default Login;