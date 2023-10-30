import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./Sobremim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Antônio</h3>
      <img src={fotoSobreMim} alt="foto" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
        Oi tudo bem eu sou desenvolvedor Front-End
      </p>
      <p className={styles.paragrafo}>Sou estudante</p>
      <p className={styles.paragrafo}>Sou programador</p>
    </PostModelo>
  );
}
