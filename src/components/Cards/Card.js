import { Link } from "react-router-dom"
import styles from "./Card.module.css"

import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export default function Card({ id, nome, budget, category, handleRemove }) {
    return (
        <>
            <div className={styles.project_card}>
                <h4>{nome}</h4>
                <p>
                    <span>Orçamento:</span> R${budget}
                </p>
                <p className={styles.category_text}>
                    <span className={`${styles[category.toLowerCase()]}`}></span> {category}
                </p>
                <div className={styles.botoes}>
                    <Link to="/"> 
                       <BsPencil/> Editar
                    </Link>
                    <button>
                        <BsFillTrashFill/> Exluir
                    </button>
                </div>
            </div>
        </>
    )

}