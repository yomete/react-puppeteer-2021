import { useState } from "react";

import "./App.css";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    if (email === "username@gmail.com" && password === "password") {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  };

  return (
    <div className="App">
      <div className="form-wrapper">
        <h1 className="form-header">Login form</h1>

        {!isUserLoggedIn && (
          <form className="form" onSubmit={login}>
            <input
              type="email"
              required
              placeholder="Email Address"
              className="form-input form-input__email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="form-input form-input__password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </form>
        )}

        {isUserLoggedIn && <p className="form-success-message">You are now signed in.</p>}
      </div>
    </div>
  );
}

export default App;
