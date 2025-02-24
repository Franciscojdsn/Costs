import styles from "./Projeto.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../../components/Loading/Loading"
import ProjetoFormulario from "../../components/Formulario/ProjetoFormulario"
import Message from "../../components/Message/Message"
import ServiceForm from "../ServiceForm/ServiceForm"


export default function Projeto() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    var formatBudget = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(project.budget);
    var formatCost = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(project.cost);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log)
        }, 200)

    }, [id])

    function editPost(project) {
        setMessage('')

        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do proejto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(!showProjectForm)
                setMessage('Projeto atualizdo!')
                setType('sucess')
            })
            .catch((err) => (console.log(err)))
    }

    function createService () {
        
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? (
                <div className={`${styles.container} ${styles.min}`}>
                    <div className={`${styles.project_details}`}>
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1 > Projeto: {project.name}</h1 >
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.details_info}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span> Total de Orçamento: </span> {formatBudget}
                                    </p>
                                    <p>
                                        <span> Total de Utilizado: </span> {formatCost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.service_form_container}>
                                    <ProjetoFormulario
                                        handleSubmit={editPost}
                                        btnText="Concluir"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={`${styles.service_form_container2}`}>
                                <div className={`${styles.service_form_container}`}>
                                    <h2>Adicione um serviço:</h2>
                                    <button className={styles.btn} onClick={toggleServiceForm}>
                                        {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                                    </button>
                                </div>
                                <div className={styles.form_itens}>
                                    {showServiceForm && (
                                        <ServiceForm 
                                            handleSubmit={createService}
                                            textBtn="Adicionar Serviço"
                                            projectData={project}
                                        />
                                    )}
                                </div>

                        </div>
                        <div className={styles.project_itens}>
                            <h2>Serviços</h2>
                            <p>Itens de serviços</p>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )

}