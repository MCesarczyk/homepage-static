import portrait from '../assets/portrait.png';
import './style.css';

const Header = () => (
  <header className='header'>
      <img
        className='header__titleImage'
        src={portrait} alt="portrait"
      />
      <h1 className='header__title'>
        Cesarczyk.dev
      </h1>
  </header>

);

export default Header;