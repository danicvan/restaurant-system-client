import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Login/Login";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";

function Main() {
    return (
        <>
            <Router>
                <div className="side__routes">
                    <Sidebar />
                    <Routes>
                        <Route path="/login" Component={Login} />
                        <Route path="/search" Component={Search} />
                        <Route path="/menu" Component={Menu} />
                        <Route path="/cart" Component={Cart} />
                        <Route path="/orders" Component={Orders} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default Main;
