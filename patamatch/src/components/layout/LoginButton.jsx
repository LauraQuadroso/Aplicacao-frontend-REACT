import { Link } from "react-router-dom";
import style from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <Link to="/login" className={style.button}>
      Entrar
    </Link>
  );
};

export default LoginButton;
