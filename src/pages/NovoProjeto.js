import { useNavigate } from 'react-router-dom';

import ProjetoFormulario from "../components/Formulario/ProjetoFormulario"
import styles from "../pages/Home/Home.module.css"

export default function NovoProjeto () {

    const navigate = useNavigate()

    function createPost (project) {

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                navigate('/projetos', {state: {message: 'Projeto criado com sucesso!'} })
            })
        .catch(err => console.log(err))

    }

    return (
        <>
            <div className={`${styles.min} ${styles.newproject_container}`}>
                <h1>Criar projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços.</p>
                <ProjetoFormulario handleSubmit={createPost} btnText="Criar Projeto"/>
            </div>
        </>
    )

}