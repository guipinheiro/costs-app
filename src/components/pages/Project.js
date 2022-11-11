import styles from "./styles/Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";

function Project() {
	const { id } = useParams();
	const [project, setProject] = useState("");
	const [showProjectForm, setShowProjectForm] = useState(false);
	const [message, setMessage] = useState();
	const [type, setType] = useState();

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

	function editPost(project) {
		// Budget Validation
		if (project.projBudget < project.cost) {
			setMessage("Orçamento menor que custo total do projeto!");
			setType("error");
			return false;
		}
		//! Mensagem
		fetch(`${projectsApi}${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(project),
		})
			.then((resp) => resp.json())
			.then((data) => {
				setProject(data);
				setShowProjectForm(false);
				setMessage("Projeto atualizado com sucesso");
				setType("success");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<>
			{project.projName ? (
				<div className={styles.projectDetails}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={styles.detailsContainer}>
							<h1>{project.projName}</h1>
							<button onClick={toggleProjectForm} className={styles.btn}>
								{!showProjectForm ? "Editar Projeto" : "Fechar"}
							</button>
							{!showProjectForm ? (
								<div className={styles.projectInfo}>
									<p>
										<span>Categoria: </span>
										{project.projType.name}
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
								<div className={styles.projectInfo}>
									<ProjectForm
										handleSubmit={editPost}
										btnText="Salvar"
										projectData={project}
									/>
								</div>
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

