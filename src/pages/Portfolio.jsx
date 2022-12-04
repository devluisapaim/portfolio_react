import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowSquareOut } from "phosphor-react";
import { Header } from "../components/Header";
import styles from "../styles/pages/Portfolio.module.css";
import portfolioImg from "../assets/portfolio.svg";


export const Portfolio = () => {

    const [repositories, setRepositories] = useState([]);
    const baseURL= 'https://api.github.com/users/devluisapaim/repos';

    useEffect(() => {
        async function getData() {
            const response = await axios.get(baseURL);
            setRepositories(response.data);
        };
        getData();

    }, []);

    return(
        <>
            <Header title="Meus projetos" image={portfolioImg}/>

            <div className={styles.projectsContainer}>
                <h2 className={styles.projectsTitle}>Projetos no meu Github</h2>
                <div className={styles.projectsContainer}>
                    <div className={styles.cardsRepoContainer}>
                        {repositories.map(repo => 
                            <div className={styles.cardRepo}>
                                <h3 className={styles.cardRepoText} key={repo.id}>{repo.name}</h3>
                                <p className={styles.cardRepoText}>{repo.description}</p>
                                <a className={styles.cardRepoLink} href={repo.html_url} target="_blank" rel="noreferrer">
                                    <ArrowSquareOut size={32} />
                                </a>                                
                            </div>
                        )}
                    </div>
                </div>                
            </div>
        </>
    );
};



/* FAVORITOS

      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>Favoritos</h2>
        <div className={styles.cardsContainer}>
          {list.map(repo => {
            return(
              <div className={styles.card} key={repo.id}>
                <h1>{repo.nome}</h1>
                <img className={styles.cardImage} src={repo.imagem} />
                <p className={styles.cardText}>{repo.descricao}</p>
                <a className={styles.cardLink}href={repo.link} target="_blank" rel="noreferrer">
                  Ver projeto
                </a>
              </div>
            )
          })}
        </div>
      </div>
      
*/