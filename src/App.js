import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav-footer/nav";
import Footer from "./components/nav-footer/footer";


function App() {
  return (
    
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
