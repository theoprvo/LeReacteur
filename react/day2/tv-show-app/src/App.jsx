import "./App.css";
import tvShowsProgramm from "./assets/data.json";
import Section from "./components/Section";
import RayquazzaLogo from "./assets/rayquazza.png";

function App() {
  return (
    <div className="container">
      <header>
        <img src={RayquazzaLogo} alt="logo" /> <h1>M6</h1>
      </header>
      {console.log("test")}
      <section>
        {tvShowsProgramm.map((item, index) => {
          return (
            <Section
              key={item.title + index}
              duration={item.duration}
              image={item.image}
              title={item.title}
              type={item.type}
              time={item.time}
              direct={item.direct}
              exclusive={item.isUnseen}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
