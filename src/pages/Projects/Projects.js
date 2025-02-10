import { useLocation } from "react-router-dom"
import Message from '../../components/Message/Message'
import styles from "./Projects.module.css"
import LinkButton from "../../components/Button/LinkButton"
import Card from "../../components/Cards/Card"
import { useState, useEffect } from "react"

export default function Projetos() {

    const [projects, setProjects] = useState([])

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
          })
          .catch ((err) => console.log(err) )
    }, [])  

    return (
        <>
            <div className={`${styles.container} ${styles.min}`}>
                <div className={styles.title}>
                    <h1>Meus Projetos</h1>
                    <LinkButton text="Criar Projetos" to="/" />  
                </div>
                {message && <Message type="sucess" msg={message}/>}
                <div className={styles.start}>
                    {projects.length > 0 &&
                        projects.map((project) => (
                        <Card 
                            id={project.id}
                            nome={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    )) }
                </div>
            </div>
        </>
    )

}