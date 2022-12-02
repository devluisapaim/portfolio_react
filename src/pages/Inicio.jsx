import { Header } from "../components/Header";
import { AddressBook, Alien, BracketsCurly} from "phosphor-react";
import styles from "../styles/pages/Inicio.module.css";
import homeImg from "../assets/home.svg";
//import { CardInicio } from "../components/CardInicio";

export const Inicio = () => {
    return(
        <>
            <Header title="Meu site pessoal" image={homeImg}/>

            <div className={styles.homeContainer}>
                <div className={styles.cardContainer}>
                    <Alien size={150} color="#3498db" weight="thin"/>
                    <h2 className={styles.cardTitle}>Vida</h2>
                    <p className={styles.cardText}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
                </div>
                <div className={styles.cardContainer}>
                    <BracketsCurly size={150} color="#3498db" weight="thin"/>
                    <h2 className={styles.cardTitle}>Código</h2>
                    <p className={styles.cardText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
                </div>
                <div className={styles.cardContainer}>
                    <AddressBook size={150} color="#3498db" weight="thin"/>
                    <h2 className={styles.cardTitle}>Contato</h2>
                    <p className={styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
                </div>
            </div>
        </>
    );
};


/*             <div className={styles.homeContainer}>
                <CardInicio title="Vida" text="Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades."/>
                <CardInicio title="Código" text="Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação."/>
                <CardInicio title="Contato" text="Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos."/>
            </div>  */ 