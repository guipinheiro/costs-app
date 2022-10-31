import styles from "./styles/NewProject.module.css";

import ProjectForm from "../project/ProjectForm";

function NewProject() {
	return (
		<section className={styles.newProjectContainer}>
			<h1>Criar Projeto</h1>
			<p>*Crie seu projetos para depois adicionar os serviços</p>
			<ProjectForm />
		</section>
	);
}

export default NewProject;

