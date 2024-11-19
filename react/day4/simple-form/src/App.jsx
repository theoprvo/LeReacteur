import "./App.css";
import Form from "./Components/Form";
import StepTwo from "./Components/StepTwo";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      {isLogged === false && (
        <div>
          <h1>Create account</h1>
          <Form
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        </div>
      )}
      {isLogged === true && (
        <StepTwo
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          name={name}
          email={email}
          password={password}
        />
      )}
    </>
  );
}

export default App;
