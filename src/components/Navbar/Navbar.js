import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import logo from "../../assets/costs_logo.png"

export default function Navbar() {

    return (
        <>
            <div>
                <nav className={styles.navbar} >
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"> Home</Link> 
                    </li>
                    <li className={styles.item}>
                        <Link to="Projetos"> Projetos</Link> 
                    </li>
                    <li className={styles.item}>
                        <Link to="Empresa"> Empresa</Link> 
                    </li>
                    <li className={styles.item}>
                        <Link to="Contatos"> Contatos</Link> 
                    </li>
                </ul>
            </nav>
        </div >
        </>
    )

}