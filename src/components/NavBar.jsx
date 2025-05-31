import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import paw from '/logo.png' // substitua pelo seu ícone real

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
      <img src={paw} alt="Pata" className={styles.pawIcon} />
        <span className={styles.pata}>Pata</span>
        <span className={styles.match}>Match</span>

      </div>

      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        {/* CORREÇÃO AQUI: Mudado para "/cadastrar" para corresponder à rota no App.jsx */}
        <Link to="/cadastrar" className={styles.link}>Cadastro</Link>
        <Link to="/login" className={`${styles.link} ${styles.loginBtn}`}>Login</Link>
        <Link to="/registro" className={`${styles.link} ${styles.registerBtn}`}>Registrar-se</Link>
      </div>
    </nav>
  )
}

export default Navbar