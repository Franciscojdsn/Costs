import styles from "./Projeto.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Projeto () {

    const {id} = useParams()
    console.log(id)

    const [project, setProject] = useState([])

    useEffect(() => {

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
    }, [id])

    return (
        <>
            <p className={`${styles.container} ${styles.min}`}>
                {project.name}
            </p>
        </>
    )

}