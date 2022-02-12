import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome on my homepage!
        </h2>
        <h4>
          This website is under construction
        </h4>
        <p>
          Below is my temporary homepage:
        </p>
        <a
          className="App-link"
          href="https://mcesarczyk.github.io/personal-homepage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>MCesarczyk @ gh-pages</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
