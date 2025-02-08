import { useLocation } from "react-router-dom"
import Message from '../../components/Message/Message'
import styles from "./Projects.module.css"

export default function Projetos() {

    const location = useLocation()
    let message = ''    

    if(location.state) {
        message = location.state.message
    }

    return (
        <>
            <div className={`${styles.container} ${styles.min}`}>
                <h1>Meus Projetos</h1>
                {message && <Message type="sucess" msg={message}/>}
            </div>
        </>
    )

}