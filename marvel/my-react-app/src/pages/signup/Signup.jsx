import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      //ENREGISTREMENT DE L'USER EN BDD
      const response = await axios.post(`http://localhost:3000/user/signup/`, {
        email: email,
        password: password,
        username: username,
      });
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
      console.log();
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("This email is already used");
      }
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="toto">
        <div className="sign-up">
          <h2>Create an account</h2>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">What's your email?</label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrorMessage("");
                }}
                value={email}
                name="email"
                type="mail"
                placeholder="EMAIL"
              />
              <span>{errorMessage}</span>
            </div>
            <div>
              <label htmlFor="">Choose a username</label>
              <input
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
                name="username"
                type="text"
                placeholder="USERNAME"
              />
            </div>
            <div>
              <label htmlFor="">Choose a password</label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
                name="password"
                type="password"
                placeholder="PASSWORD"
              />
              <label htmlFor="">Confirm your password</label>
              <input
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                value={confirmPassword}
                name="confirm-password"
                type="password"
                placeholder="CONFIRM PASSWORD"
              />
            </div>
            <div>
              <button type="submit">Create account</button>
            </div>
          </form>
          <div>
            <span>
              <Link to="/login">ALREADY HAVE AN ACCOUNT?</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
