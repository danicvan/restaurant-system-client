import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <div className="login__route">
          <Login />
          <Routes>
            <Route path="/login" Component={Login} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
