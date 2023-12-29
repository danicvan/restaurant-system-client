import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import bigLogo from "../../assets/big-logo.svg";
import Main from "../Main/Main";

function Login() {
    const [showMain, setShowMain] = useState(false);

    const handleLoginClick = () => {
        setShowMain(true);
    };

    return (
        <>
            {showMain ? (
                <Main />
            ) : (
                <>
                    <Navbar />

                    <div className="main">
                        <div className="main__image">
                            <img src={bigLogo} alt="" />
                        </div>

                        <div className="main__login">
                            <button onClick={handleLoginClick}>Login</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Login;
