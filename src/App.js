import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";

import Navbar from "./components/navbar/navbar";
import PlacesContextProvider from "./context/placesContext";
import Home from "./pages/home/home";
import Places from "./pages/places/places";

function App() {
  return (
    <div className="App">
      <PlacesContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/places" element={<Places />} />
          </Routes>
          <Footer />
        </Router>
      </PlacesContextProvider>
    </div>
  );
}

export default App;
