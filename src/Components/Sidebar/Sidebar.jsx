import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="side">
                <div className="side__menu">
                    <ul className="side__list">
                        <Link to="/login" className="side__link">
                            <li className="side__item">
                                <img src={logo} alt="" />
                                <span>Search</span>
                            </li>
                        </Link>

                        <Link to="/login" className="side__link">
                            <li className="side__item">
                                <img src={logo} alt="" />
                                <span>Menu</span>
                            </li>
                        </Link>

                        <Link to="/login" className="side__link">
                            <li className="side__item">
                                <img src={logo} alt="" />
                                <span>Cart</span>
                            </li>
                        </Link>

                        <Link to="/login" className="side__link">
                            <li className="side__item">
                                <img src={logo} alt="" />
                                <span>Orders</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
