import "./App.css";
import "./index.css";
import ironhackLogo from "./assets/ironhackLogo.png";
import menuTop from "./assets/menuTop.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div id="back">
        <div id="start-icons">
          <div id="iron-logo">
            <img src={ironhackLogo} alt="ironhack logo"></img>
          </div>
          <div id="menu-top">
            <img src={menuTop} alt="menu top"></img>
          </div>
        </div>
        <div id="text1">
          <h1>Say hello to ReactJS</h1>
          <h2>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
            <h3>Awesome!</h3>
          </h2>
        </div>
      </div>
      <div id="icon">
        <div id="icon1">
          <img src={icon1} alt="icon 1"></img>
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive Uls.</p>
        </div>
        <div id="icon2">
          <img src={icon2} alt="icon 2"></img>
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div id="icon3">
          <img src={icon3} alt="icon 3"></img>
          <h4>Single-way</h4>
          <p>A set of immutable values are passed to the component`s. </p>
        </div>
        <div id="icon4">
          <img src={icon4} alt="icon 4"></img>
          <h4>JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
