import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Find from "../Search/Search";

function Login() {
    return (
        <>
            <Navbar />
            <Router>
                <div className="side__routes">
                    <Sidebar />
                    <Routes>
                        <Route path="/search" Component={Find} />
                        <Route path="/menu" Component={Find} />
                        <Route path="/cart" Component={Find} />
                        <Route path="/orders" Component={Find} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default Login;
