import logo from './logo.svg';
import './App.css';
import NewComposant from './newComposant'
import HidePassword from './HidePassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          Kylian
        </a>
      </header>
      <NewComposant >kylian il est trop fort </NewComposant>
      <HidePassword>toto</HidePassword>
    </div>
  );
}

export default App;
