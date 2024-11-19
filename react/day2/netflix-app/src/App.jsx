import "./App.css";
import logo from "./assets/netflix_logo.png";
import movies from "./assets/movies_rnexgr.json";
import Section from "./Section";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} />
      {movies.map((item) => {
        return (
          <Section
            key={item.category}
            category={item.category}
            images={item.images}
          />
        );
      })}
    </div>
  );
}

export default App;
