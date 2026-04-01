import { Link,useNavigate } from "react-router-dom";

function Navbar(){

 const navigate = useNavigate();

 const stored = JSON.parse(localStorage.getItem("user"));

 const loggedIn = stored && stored.user && stored.user.id;

 const logout = () => {

  localStorage.removeItem("user");

  navigate("/login");

 };

 return(

  <div className="navbar">

   <div className="nav-left">

    <Link to="/">Home</Link>

    <Link to="/charity">Charity</Link>

    <Link to="/dashboard">Dashboard</Link>

    <Link to="/add-score">Add Score</Link>
    <Link to="/admin">Admin</Link>
   </div>


   <div className="nav-right">

    {

     loggedIn ?

     <button onClick={logout}>
      Logout
     </button>

     :

     <>

      <Link to="/login">
       <button>Login</button>
      </Link>

      <Link to="/register">
       <button>Create Account</button>
      </Link>

     </>

    }

   </div>

  </div>

 );

}

export default Navbar;