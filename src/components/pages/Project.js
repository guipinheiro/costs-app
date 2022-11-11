import styles from "./styles/Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../layout/Loading";
import Container from "../layout/Container";

function Project() {
	const { id } = useParams();
	const [project, setProject] = useState("");
	const [showProjectForm, setShowProjectForm] = useState(false);

	const projectsApi = "http://localhost:5000/projects/";

	useEffect(() => {
		fetch(`${projectsApi}${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProject(data);
			})
			.catch((err) => {
				throw err;
			});
	}, [id]);

	// For editing the form
	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm);
	}

	return (
		<>
			{project.projName ? (
				<div className={styles.projectDetails}>
					<Container customClass="column">
						<div className={styles.detailsContainer}>
							<h1>{project.projName}</h1>
							<button onClick={toggleProjectForm} className={styles.btn}>
								{!showProjectForm ? "Editar Projeto" : "Fechar"}
							</button>
							{!showProjectForm ? (
								<div className={styles.projectInfo}>
									<p>
										<span>Categoria: {project.projType.name}</span>
									</p>
									<p>
										<span>Total de Orçamento: </span> R${" "}
										{project.projBudget}
									</p>
									<p>
										<span>Total Utilizado: </span> R$ {project.cost}
									</p>
								</div>
							) : (
								<div className={styles.projectInfo}>Form</div>
							)}
						</div>
					</Container>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Project;

