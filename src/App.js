import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu.tsx";
import Producto from "./components/Producto.tsx";
import Counter from "./components/Counter.tsx";
import Empleados from "./components/Empleado.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Producto nombre="Fresa" bgCol="#FFCCE1" />
        <Producto nombre="Guanabana" />
        <Producto nombre="Mora" bgCol="#E0D7FF" />
        <Menu />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Empleados />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">
          <i className="fa-solid fa-user"></i>
        </button>
      </header>
    </div>
  );
}

export default App;
