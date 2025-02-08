import styles from './Home.module.css'
import savings from '../../assets/savings.svg'
import LinkButton from '../../components/Button/LinkButton'

export default function Home (props) {

    return (
        <>
            <div className={`${styles.container} ${styles[props.customClass]}`}>
                <section className={styles.home_container}>
                    <h1>Bem-vindo ao <span>Costs</span></h1>
                    <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                    <LinkButton text="Criar Projeto" to="NovoProjeto" />
                    <img src={savings} alt="salvando"/>
                </section>
            </div>
        </>
    )

}