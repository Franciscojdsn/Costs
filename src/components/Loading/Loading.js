import styels from "./Loading.module.css"
import loading from "../../assets/loading.svg"

export default function Loading () {

    return (
        <div className={styels.loader_container}>
            <img className={styels.loader} src={loading} alt="Loading" ></img>
        </div>
    )

}