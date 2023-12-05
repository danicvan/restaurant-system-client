import logo from "../../assets/logo.png";

function Sidebar() {
    return (
        <>
            <div className="side">
                <div className="side__menu">
                    <ul className="side__list">
                        <li className="side__item">
                            <img src={logo} alt="" />
                            <span>Search</span>
                        </li>

                        <li className="side__item">
                            <img src={logo} alt="" />
                            <span>Menu</span>
                        </li>

                        <li className="side__item">
                            <img src={logo} alt="" />
                            <span>Cart</span>
                        </li>

                        <li className="side__item">
                            <img src={logo} alt="" />
                            <span>Orders</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
