import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import  Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Homepage/>}></Route>
        <Route path="/register" element={user ? <Homepage /> : <Register/>}></Route>
        <Route path="/login" element={user ? <Homepage /> : <Login/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Register />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
     </Router>
  );
}

export default App;
