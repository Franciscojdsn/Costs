import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Contatos from "../pages/Contatos";
import Empresa from "../pages/Empresa";
import NovoProjeto from "../pages/NovoProjeto";
import Footer from "../components/Footer/Footer";
import Projetos from "../pages/Projects/Projects";
import Projeto from "../pages/Projeto/Projeto";


export default function AppRoutes () {

    return (
        <Router>
            <Navbar customClass="min"/>
            <Routes>
                <Route path="/" element={<Home customClass="min"/>}></Route>
                <Route path="Contatos" element={<Contatos customClass="min" />}></Route>
                <Route path="Empresa" element={<Empresa customClass="min" />}></Route>
                <Route path="NovoProjeto" element={<NovoProjeto />}></Route>
                <Route path="Projetos" element={<Projetos />}></Route>
                <Route path="Projeto/:id" element={<Projeto />}></Route>
            </Routes>
            <Footer />
        </Router>
    )

}