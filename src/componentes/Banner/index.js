import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Ola,Mundo!</h1>
        <p className={styles.paragrafo}>Eu sou o Antonio</p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="foto"
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="foto do antonio"
        />
      </div>
    </div>
  );
}
