import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Charities from "./pages/Charities";
import AdminPanel from "./pages/AdminPanel";
import ScoreEntry from "./pages/ScoreEntry";
function App() {

 return (

  <Router>

   <Navbar />

   <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/charity" element={<Charities />} />

    <Route path="/admin" element={<AdminPanel />} />

    <Route path="/add-score" element={<ScoreEntry />} />

   </Routes>

  </Router>

 );

}

export default App;