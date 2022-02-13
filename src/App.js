import portrait from './portrait.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className='App__titleWrapper'>
          <img 
          className='App__titleImage'
          src={portrait} alt="portrait"
          />
          <h1 className='App__title'>
            Cesarczyk.dev
            </h1>
        </div>
        <p>
          Welcome to my homepage!
        </p>
        <p>
          This website is under construction
        </p>
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
    </div >
  );
}

export default App;
