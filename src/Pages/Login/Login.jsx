import { useState } from "react";
import bigLogo from "../../assets/big-logo.svg";
import Main from "../Main/Main";
import axios from "axios";

function Login() {
    const [showMain, setShowMain] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLoginClick = async () => {
        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password,
            });
            const token = response.data.token;
            // Store token securely in local storage
            localStorage.setItem("token", token);
            setShowMain(true);
        } catch (error) {
            setError("Invalid username or password");
        }
    };

    return (
        <>
            {showMain ? (
                <Main />
            ) : (
                <>
                    <div className="main">
                        <div className="main__image">
                            <img src={bigLogo} alt="" />
                        </div>

                        <div className="main__credentials">
                            <div className="main__login">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button onClick={handleLoginClick}>Login</button>
                                {error && <div className="error">{error}</div>}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Login;
