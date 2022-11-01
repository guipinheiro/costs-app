import styles from "./styles/Submit.module.css";

function Submit({ text }) {
	return <input type="submit" value={text} className={styles.submitButton} />;
}

export default Submit;

