import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IsLoggedin from "./components/protectedRouts/IsLoggedin";
import NotLoggedin from "./components/protectedRouts/NotLoggedin";
import ContactHeader from "./components/contactheader/ContactHeader";
import Footer from './components/Footer/Footer';

function App() {
  

  
  return (
    <div className="App">
      <ContactHeader />
       <BrowserRouter>
      
     <NavBar />
   
<Routes>
  <Route path="/" element={<IsLoggedin>  <HomePage /> </IsLoggedin>}> </Route>
  <Route path="/Shop" element={<h1>shop</h1>}> </Route>
  <Route path="/Contact" element={<h1>contact</h1>}> </Route>
  <Route path="/Login" element={<NotLoggedin><Login /></NotLoggedin> }> </Route>
  
  <Route path="*" element={<h1>eror 404</h1>}> </Route>
</Routes>

<Outlet />
</BrowserRouter>


   
    
    </div>
  );
}

export default App;
