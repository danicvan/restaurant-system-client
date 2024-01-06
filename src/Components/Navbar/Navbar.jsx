import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <>
            <div className="nav" onClick={handleLogoClick}>
                <img src={logo} alt="" />
            </div>
        </>
    );
}

export default Navbar;