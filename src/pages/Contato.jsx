import { Header } from "../components/Header";
import contatoImg from "../assets/contato.svg";
import styles from "../styles/pages/Contato.module.css";
import { useState } from "react";

export const Contato = () => {
//estados armazenam dados do input, através do 'handle'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleInputName(event) {
        setName(event.target.value);
    }
    function handleInputEmail(event) {
        setEmail(event.target.value);
    }
    function handleInputMessage(event) {
        setMessage(event.target.value);
    }

    function createMessage(event) {
        event.preventDefault();    //previne comportamento padrão de recarregar página
       
        console.log('Nome: ', name);
        console.log('E-mail: ', email);
        console.log('Mensagem: ', message);

        setName('');
        setEmail('');
        setMessage('');
    }

    return(
        <>
            <Header title="Contato" image={contatoImg}/>
        <div>
            <form className={styles.form} onSubmit={createMessage}>
                <input onChange={handleInputName} className={styles.formInput} placeholder="Digite seu nome" type="text" value={name}/>
                <input onChange={handleInputEmail} className={styles.formInput} placeholder="Digite seu e-mail" type="email" value={email} />
                <textarea onChange={handleInputMessage} className={styles.formTextArea} placeholder="Digite sua mensagem" name="" id="" value={message} ></textarea>
                <button className={styles.formButton} type="submit">Enviar mensagem</button>
            </form>
        </div>
        </>
    );
};
