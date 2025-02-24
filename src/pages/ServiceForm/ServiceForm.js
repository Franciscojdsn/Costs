import { use, useState } from "react"
import styles from "../../pages/Projeto/Projeto.module.css"
import Input from "../../components/Formulario/input/input"
import Submit from "../../components/Formulario/submit/Submit"

export default function ServiceForm ({ handleSubmit, textBtn, projectData }) {

    const [service, setService] = useState({})

    function submit() {

    }

    function handleChange(e) {
        setService({ ...service, [e.target.name] : e.target.value})
    }

    return (
        <>
            <form onSubmit={submit} className={styles.form}>
                <Input 
                    type="text"
                    text="Nome do serviço"
                    name="name"
                    placeholder="Insira o nome do serviço"
                    handleOnChange={handleChange}
                />

                <Input 
                    type="number"
                    text="Custo do serviço"
                    name="cost"
                    placeholder="Insira o valor total"
                    handleOnChange={handleChange}
                />

                <Input 
                    type="text"
                    text="Descrição do serviço"
                    name="description"
                    placeholder="Descreva o serviço"
                    handleOnChange={handleChange}
                />

                <Submit 
                    text={textBtn}
                />
            </form>
        </>
     )

}