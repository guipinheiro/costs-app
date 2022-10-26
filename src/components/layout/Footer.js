import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./styles/Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.socialList}>
				<li className={styles.item}>
					<FaFacebook />
				</li>
				<li className={styles.item}>
					<FaInstagram />
				</li>
				<li className={styles.item}>
					<FaLinkedin />
				</li>
			</ul>
			<p className={styles.copyright}>
				<span>Costs</span> &copy; 2022
			</p>
		</footer>
	);
}

export default Footer;

