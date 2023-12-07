import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import Main from "../Main/Main";

function Login() {
    const [showMain, setShowMain] = useState(false);

    const handleLoginClick = () => {
        setShowMain(true);
    };

    return (
        <>
            <Navbar />
            <div className="main__image">
                <img src={logo} alt="" />
            </div>

            {showMain ? (
                <Main />
            ) : (
                <div className="main__login">
                    <button onClick={handleLoginClick}>Login</button>
                </div>
            )}
        </>
    );
}

export default Login;
