import {useState} from "react";
import axios from "axios";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [subscription,setSubscription] = useState("monthly");

const registerUser = async()=>{

await axios.post(

"https://golf-backend-n06r.onrender.com/api/register",

{

name,
email,
password,
subscription

}

);

alert("Registered successfully");

}

return(

<div className="container">

<div className="card">

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/>

<input
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<select
onChange={(e)=>setSubscription(e.target.value)}
>

<option value="monthly">

Monthly Plan

</option>

<option value="yearly">

Yearly Plan

</option>

</select>

<br/><br/>

<button onClick={registerUser}>

Register

</button>

</div>

</div>

)

}

export default Register;