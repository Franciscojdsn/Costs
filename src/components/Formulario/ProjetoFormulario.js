import { useEffect, useState } from "react"
import Input from "./input/input"
import styles from "./ProjetoFormulario.module.css"
import Select from "./select/Select"
import Submit from "./submit/Submit"

export default function ProjetoFormulario({ handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect (() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then ((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } })
    }

    return (
        <>
            <form onSubmit={submit} className={styles.form}>
                <div>
                    <Input 
                    type="text" 
                    text="Nome do Projeto" 
                    name="name" 
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                    />
                </div>
                <div>
                <Input 
                    type="number" 
                    text="Orçamento do Projeto" 
                    name="budget" 
                    placeholder="Insira o orçamento total"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                    />
                </div>
                <Select 
                    name="category_id"
                    text="Selecione a categoria:"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : '' }
                />
                <Submit text={btnText}/>
            </form>
        </>
    )

}