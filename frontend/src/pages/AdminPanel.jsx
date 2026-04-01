import { useEffect,useState } from "react";
import axios from "axios";

function AdminPanel(){

 const [users,setUsers] = useState([]);
 const [scores,setScores] = useState([]);
 const [charities,setCharities] = useState([]);

 useEffect(()=>{

  fetchUsers();
  fetchScores();
  fetchCharities();

 },[]);


 const fetchUsers = async()=>{

  try{

   const res = await axios.get(

    "https://golf-backend-n06r.onrender.com/api/users"

   );

   setUsers(res.data);

  }

  catch(err){

   console.log(err);

  }

 };


 const fetchScores = async()=>{

  try{

   const res = await axios.get(

    "https://golf-backend-n06r.onrender.com/api/all-scores"

   );

   setScores(res.data);

  }

  catch(err){

   console.log(err);

  }

 };


 const fetchCharities = async()=>{

  try{

   const res = await axios.get(

    "https://golf-backend-n06r.onrender.com/api/charities"

   );

   setCharities(res.data);

  }

  catch(err){

   console.log(err);

  }

 };


 return(

  <div className="container">

   <h1>⚙ Admin Panel</h1>

   <p>Monitor platform activity</p>

   <br/>


   <div className="admin-grid">


    <div className="admin-box">

     <h2>👥 Users</h2>

     <h1>{users.length}</h1>

    </div>


    <div className="admin-box">

     <h2>⛳ Scores</h2>

     <h1>{scores.length}</h1>

    </div>


    <div className="admin-box">

     <h2>❤️ Charities</h2>

     <h1>{charities.length}</h1>

    </div>


   </div>


   <br/>


   <h2>Recent Scores</h2>

   {

    scores.slice(0,5).map(s=>(

     <div key={s.id} className="score-box">

      User: {s.user_id} | Score: {s.score}

     </div>

    ))

   }


  </div>

 );

}

export default AdminPanel;