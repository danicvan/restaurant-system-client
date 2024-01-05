import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faList,
  faCartShopping,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="side">
                <div className="side__menu">
                    <ul className="side__list">
                        <Link to="" className="side__link">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="side__icon" />
                                <span>Search</span>
                        </Link>

                        <Link to="/menu" className="side__link">
                            <FontAwesomeIcon icon={faList} className="side__icon" />
                                <span>Menu</span>
                        </Link>

                        <Link to="/cart" className="side__link">
                                <FontAwesomeIcon icon={faCartShopping} className="side__icon" />
                                <span>Cart</span>
                        </Link>

                        <Link to="/orders" className="side__link">
                                <FontAwesomeIcon icon={faWallet} className="side__icon" />
                                <span>Orders</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
