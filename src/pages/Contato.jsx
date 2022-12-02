import { Header } from "../components/Header";
import contatoImg from "../assets/contato.svg";
import styles from "../styles/pages/Contato.module.css";

export const Contato = () => {
    return(
        <>
            <Header title="Contato" image={contatoImg}/>
        <div>
            <form className={styles.form} action="">
                <input className={styles.formInput} placeholder="Digite seu nome" type="text" />
                <input className={styles.formInput} placeholder="Digite seu e-mail" type="email" />
                <textarea className={styles.formTextArea} placeholder="Digite sua mensagem" name="" id=""></textarea>
                <button className={styles.formButton}>Enviar mensagem</button>
            </form>
        </div>
        </>
    );
};
