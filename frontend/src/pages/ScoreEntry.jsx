import { useState } from "react";
import axios from "axios";

function ScoreEntry(){

 const [score,setScore] = useState("");
 const [msg,setMsg] = useState("");

 const user = JSON.parse(localStorage.getItem("user"));

 const addScore = async () => {

  if(score < 1 || score > 45){

   setMsg("Score must be between 1 and 45");
   return;

  }

  try{

   await axios.post(

    "https://golf-backend-n06r.onrender.com/api/score",

    {
     user_id: user.user.id,
     score: Number(score)
    }

   );

   setMsg("Score saved successfully!");

   setScore("");

   setTimeout(()=>{

    window.location.href="/dashboard";

   },1500);

  }

  catch(err){

   setMsg("Error saving score");

  }

 };


 return(

  <div className="auth-container">

   <div className="auth-box">

    <h1>⛳ Enter Golf Score</h1>

    <p>Track your daily performance</p>

    <input
     type="number"
     placeholder="Enter score (1-45)"
     value={score}
     onChange={(e)=>setScore(e.target.value)}
    />

    <button onClick={addScore}>
     Save Score
    </button>

    <p className="msg">
     {msg}
    </p>

   </div>

  </div>

 );

}

export default ScoreEntry;