import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import LoginButton from './LoginButton'; 

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      
      <div className={style.logoContainer}>
        <img className={style.logo} src='./logo.png' alt='logo da PataMatch' />
        <Link to="/" className={style.brand}>
          <span>Pata</span><span className={style.highlight}>Match</span>
        </Link>
      </div>

      {/* Menu + Botão de Login */}
      <div className={style.menuContainer}>
        <ul className={style.list}>
          <li><Link to="/" className={style.itens}>Quem Somos</Link></li>
          <li><Link to="/adote" className={style.itens}>Adote</Link></li>
          <li><Link to="/apadrinhe" className={style.itens}>Apadrinhe</Link></li>
          <li><Link to="/cadastrar" className={style.itens}>Cadastrar Pet</Link></li>
        </ul>

        
        <LoginButton />
      </div>
    </nav>
  );
};

export default Navbar;
