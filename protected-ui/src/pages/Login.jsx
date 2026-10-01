import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function handleLogin() {

    if (username.trim() === "") {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  }

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Login</h1>

        <p>Enter your name to continue</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;