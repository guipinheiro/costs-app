import styles from "./styles/Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
	return (
		<main className={styles.homeContainer}>
			<h1>
				Bem-vindo ao <span>Costs!</span>
			</h1>
			<p>Comece a gerenciar seus projetos agora mesmo.</p>
			<LinkButton to="/newproject" text="Criar Projeto" />
			<img
				src={savings}
				alt="Cartoon man riding a piggy bank while holding a coin with a dollar sign"
			/>
		</main>
	);
}

export default Home;

