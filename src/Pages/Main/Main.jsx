// Main.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Login/Login";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";

function Main() {
    return (
        <Router>
            <div className="side__routes">
                <Sidebar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Main;
