import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SingUp";
import SignIn from "./pages/SingIn";

import Header from "./components/Header";

// faire le loading

function App() {
  return (
    <Router>
      <Header Link={Link} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
