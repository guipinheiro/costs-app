import { useNavigate } from "react-router-dom";

import styles from "./styles/NewProject.module.css";

import ProjectForm from "../project/ProjectForm";

function NewProject() {
	const navigate = useNavigate();

	// Send data from the new project into db.json and redirects to /projects
	function createPost(project) {
		// Initialize cost and services
		project.cost = 0;
		project.services = [];

		fetch("http://localhost:5000/projects", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(project),
		})
			.then((resp) => resp.json())
			.then((data) => {
				navigate("/projects", {
					state: { message: "Projeto criado com sucesso" },
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<main className={styles.newProjectContainer}>
			<h1>Criar Projeto</h1>
			<p>*Crie seu projetos para depois adicionar os serviços</p>
			<ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
		</main>
	);
}

export default NewProject;

