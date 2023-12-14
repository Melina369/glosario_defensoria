import { Link } from "react-scroll";
import styles from "./navbar.module.css";

export function Navbar(){
    return (
        <nav className={styles.navbar}>
          <Link className={styles["nav-link"]} to="inicio" smooth={true} duration={500}>
            Inicio
          </Link>
          <Link
            className={styles["nav-link"]}
            to="introduccion"
            smooth={true}
            duration={500}
          >
            Introducción
          </Link>
          <Link className={styles["nav-link"]} to="glosario" smooth={true} duration={500}>
            Glosario
          </Link>
        </nav>
    )
}