import { useEffect,useState } from "react";
import axios from "axios";

function Charities(){

const [charities,setCharities] = useState([]);

const [msg,setMsg] = useState("");

const user = JSON.parse(localStorage.getItem("user"));

useEffect(()=>{

axios.get(

"https://golf-backend-n06r.onrender.com/api/charities"

)

.then(res=>{

setCharities(res.data);

})

.catch(err=>{

console.log(err);

});

},[]);


if(!user){

return(

<div className="container">

<h2>Please login first</h2>

</div>

);

}


const chooseCharity = async(id)=>{

try{

await axios.post(

"https://golf-backend-n06r.onrender.com/api/select-charity",

{

user_id:user.id,

charity_id:id

}

);

setMsg("Charity selected successfully");

}
catch(error){

setMsg("Error selecting charity");

}

};


return(

<div className="container">

<h1>

Choose a Charity

</h1>

<p>

Play golf and support a meaningful cause.

</p>

<br/>


<div style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",

gap:"30px"

}}>

{

charities.map(c=>(

<div key={c.id} className="card">

<h3>

{c.name}

</h3>


<p>

{c.description}

</p>


{/* IMAGE */}

<img
src={`https://golf-backend-n06r.onrender.com/images/${c.image}`}
alt={c.name}
style={{
width:"100%",
borderRadius:"12px",
marginTop:"10px"
}}
/>


<button

onClick={()=>chooseCharity(c.id)}

>

Choose

</button>

</div>

))

}

</div>


<p>

{msg}

</p>

</div>

);

}

export default Charities;