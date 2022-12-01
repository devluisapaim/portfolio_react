import { Header } from "../components/Header";
import homeImg from "../assets/home.svg";

export const Inicio = () => {
    return(
        <>
            <Header title="Meu site pessoal" image={homeImg}/>
        </>
    );
};
