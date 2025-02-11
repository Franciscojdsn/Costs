import { useLocation } from "react-router-dom"
import Message from '../../components/Message/Message'
import styles from "./Projects.module.css"
import LinkButton from "../../components/Button/LinkButton"
import Card from "../../components/Cards/Card"
import { useState, useEffect } from "react"
import Loading from "../../components/Loading/Loading"

export default function Projetos() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''    

    if(location.state) {
        message = location.state.message
    }

    useEffect (() => {
            fetch('http://localhost:5000/projects',{
                method:"GET",
                headers:{
                    'Content-Type': 'application/json',
                }
            }).then ((resp) => resp.json())
              .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
              })
              .catch ((err) => console.log(err) )
    }, [])  

    function removeProject (id) {
        fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto Removido com sucesso!')
        })
        .catch(err => console.log(err))

    }

    return (
        <>
            <div className={`${styles.container} ${styles.min}`}>
                <div className={styles.title}>
                    <h1>Meus Projetos</h1>
                    <LinkButton text="Criar Projetos" to="/NovoProjeto" />  
                </div>
                {message && <Message type="sucess" msg={message}/>}
                {projectMessage && <Message type="sucess" msg={projectMessage}/>}
                <div className={styles.start}>
                    {projects.length > 0 &&
                        projects.map((project) => (
                        <Card 
                            id={project.id}
                            nome={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    )) }
                    {!removeLoading && <Loading />}
                    {removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}
                </div>
            </div>
        </>
    )

}