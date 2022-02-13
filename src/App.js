import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>
          Welcome to my homepage!
        </h2>
        <h3>
          This website is under construction
        </h3>
        <p>
          Below is my temporary homepage:
        </p>
        <a
          className="App-link"
          href="https://mcesarczyk.github.io/personal-homepage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>MCesarczyk @ gh-pages</h2>
        </a>
      </main>
    </div >
  );
}

export default App;
