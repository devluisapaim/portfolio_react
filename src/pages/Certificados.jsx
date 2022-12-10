import { listCertificates } from "../services/listCertificates";
import styles from "../styles/pages/Certificados.module.css";

export const Certificados = () => {
    
    return(
        <div className={styles.container}>
            {listCertificates.map(certificate => {
                return(
                    <div className={styles.card} key={certificate.id}>
                        <h1 className={styles.cardName}>{certificate.name}</h1>
                        <a className={styles.cardLink} href={certificate.linkCertificate}>
                            <img className={styles.cardImage} src={certificate.img} />
                        </a>
                        <p className={styles.cardDescription}>{certificate.description}</p>
                        <p className={styles.cardDescription}>{certificate.date}</p>
                        <p className={styles.cardDescription}>{certificate.duration}</p>
                    </div>
                );
            })}

        </div>
    );
};

/* TENTAR CARROSSEL COM BOOTSTRAP */

/*  {listFavorites.map(fav => {
                  return(
                    <div className={styles.card} key={fav.id}>
                      <h1 className={styles.cardTitle}>{fav.name}</h1>
                      <img className={styles.cardImage} src={fav.image} />
                      <p className={styles.cardText}>{fav.description}</p>
                      <a className={styles.cardLink}href={fav.link} target="_blank" rel="noreferrer">
                        Ver projeto
                      </a>
                    </div>
                  )
                })} */