import { Header } from "../components/Header";
import sobreImg from "../assets/sobre.svg";
import minhaImg from "../assets/luisa.gif"
import styles from "../styles/pages/Sobre.module.css";

export const Sobre = () => {
    return(
        <>
            <Header title="Sobre mim" image={sobreImg}/>

            <div className={styles.sobreContainer}>
                <img className={styles.bioImg} src={minhaImg} alt="imagem de avatar em gif acenando, com tranças e sorrindo" />
                <div className={styles.bioContainer}>
                    <h2 className={styles.bioTitle}>Luísa Paim, prazer!</h2>
                    <p className={styles.bioText}>Sou baiana, metade soteropolitana e metade candeiense. Tenho 26 anos e sou Bacharela em Ciência e Tecnologia. Atuava na área comercial, mas escolhi mudar de carreira e me tornar Desenvolvedora. 
                    Encontrei no Frontend um mundo de possibilidades, e hoje me decido a estudar JavaScript e ReactJS visando uma primeira oportunidade profissional na área Tech.</p>
                </div>
            </div>
        </>
    );
};
