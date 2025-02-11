import { Link } from "react-router-dom"
import styles from "./Card.module.css"

import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export default function Card({ id, nome, budget, category, handleRemove }) {
   
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    var formatBudget = Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'}).format(budget);
   
    return (
        <>
            <div className={styles.project_card}>
                <h4>{nome}</h4>
                <p>
                    <span>Orçamento:</span> {formatBudget}
                </p>
                <p className={styles.category_text}>
                    <span className={`${styles[category.toLowerCase()]}`}></span> {category}
                </p>
                <div className={styles.botoes}>
                    <Link to={`/Projeto/${id}`}> 
                       <BsPencil/> Editar
                    </Link>
                    <button onClick={remove}>
                        <BsFillTrashFill/> Exluir
                    </button>
                </div>
            </div>
        </>
    )

}