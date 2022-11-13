import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
