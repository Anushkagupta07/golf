import { useEffect,useState } from "react";
import axios from "axios";

function Dashboard(){

 const [scores,setScores] = useState([]);
 const [wins,setWins] = useState([]);

 const stored = JSON.parse(localStorage.getItem("user"));

 const user_id = stored?.user?.id;

 


 const fetchScores = async()=>{

  try{

   const res = await axios.get(

    `https://golf-backend-n06r.onrender.com/api/scores/${user_id}`

   );

   console.log("scores api result",res.data);

   setScores(res.data || []);

  }

  catch(err){

   console.log("FETCH SCORE ERROR:",err);

   setScores([]);

  }

 };


 const fetchWins = async()=>{

  try{

   const res = await axios.get(

    `https://golf-backend-n06r.onrender.com/api/winners/${user_id}`

   );

   setWins(res.data || []);

  }

  catch(error){

   console.log("WIN API ERROR:",error);

   setWins([]);

  }

 };
useEffect(()=>{

  if(user_id){
   fetchScores();
   fetchWins();
  }

 },[user_id]);

 if(!stored){

  return <h2>Please login</h2>;

 }


 return(

  <div className="container">

   <div className="card">

    <h1>📊 Dashboard</h1>

    <p>
     Subscription: <b>{stored.user.subscription}</b>
    </p>


    <h2>🏌 Last 5 Scores</h2>

    {

     scores.length===0 ?

     <p>No scores yet</p>

     :

     scores.map((s,index)=>(

      <div key={index} className="score-box">

       Score: {s.score}

      </div>

     ))

    }

    <br/>

    <button onClick={fetchScores}>
     Refresh Scores
    </button>


    <h2>🎯 Winnings</h2>

    {

     wins.length===0 ?

     <p>No wins yet</p>

     :

     wins.map(w=>(

      <div key={w.id} className="score-box">

       Matched {w.match_count}

      </div>

     ))

    }

   </div>

  </div>

 );

}

export default Dashboard;