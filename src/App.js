import './App.css';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ShopsSignUp from "./components/ShopsSignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import the Home component if you have one
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="ShopsSignUp" element={<ShopsSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
