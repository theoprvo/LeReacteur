import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// N'ayant pas rattrapé tous les cours de React j'ai bidouillé pour avoir un rendu qui ressemble à ce qui est demandé mais loin d'etre ce qui était attendu

function App() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  const question = {
    question: "Quelle est la capitale de la France ?",
    answers: ["Londres", "Paris", "Berlin"],
    correctAnswer: 1, // Index de la réponse correcte (Paris)
  };
  let i = 0;

  return (
    <>
      <div className="container">
        <h1>Quiz Simple</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" onClick={toggleClass}>
            {question.question}
          </label>
          <div className={isActive ? "form-exo" : null}>
            {question.answers.map(function (str, index) {
              return (
                <button key={i++} type="submit">
                  {str}
                </button>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
