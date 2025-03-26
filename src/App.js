import './App.css';
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
//import {Home } from "@mui/icons-material";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<h1>Contacto</h1>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

