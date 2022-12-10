import { useState } from "react";
import { Header } from "../components/Header";
import { database } from "../services/firebase";
import contatoImg from "../assets/contato.svg";
import styles from "../styles/pages/Contato.module.css";
import { ref, push, set } from "firebase/database";
import contatoIcon from "../assets/undraw_chat-text.svg";

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
        
        //mostra no console
        // console.log('Nome: ', name);
        // console.log('E-mail: ', email);
        // console.log('Mensagem: ', message);

        //envia para o firebase

        //dentro do firebase, cria uma tabela de mensagens:
        const messageListRef = ref(database, 'mensagens');

        //dentro da tabela de mensagens, crie uma nova mensagem:
        const newMessageRef = push(messageListRef);

        //'seta' o que vai em cada mensagem
        set(newMessageRef, {
            nome: name,
            email: email,
            texto: message
        });

        setName('');
        setEmail('');
        setMessage('');
    }

    return(
        <>
            <Header title="Contato" image={contatoImg}/>
        <div>
            <form className={styles.form} onSubmit={createMessage}>
                <h2 className={styles.formTitle}>Chama no contatinho! <img className={styles.formTitleIcon} src={contatoIcon} alt="" /></h2>
                <input onChange={handleInputName} className={styles.formInput} placeholder="Digite seu nome" type="text" value={name}/>
                <input onChange={handleInputEmail} className={styles.formInput} placeholder="Digite seu e-mail" type="email" value={email} />
                <textarea onChange={handleInputMessage} className={styles.formTextArea} placeholder="Digite sua mensagem" name="" id="" value={message} ></textarea>
                <button className={styles.formButton} type="submit">Enviar mensagem</button>
            </form>
        </div>
        </>
    );
};
