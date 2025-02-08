import styles from '../pages/Home/Home.module.css'

export default function Empresa(props) {

    return (
        <>
            <div className={`${styles.container} ${styles[props.customClass]}`}>
                <p>Empresa</p>
            </div>
        </>
    )

}