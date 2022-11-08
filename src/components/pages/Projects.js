import styles from "./styles/Projects.module.css";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

function Projects() {
	// General states to handle projects, loader and message
	const [projects, setProjects] = useState([]);
	const [removeLoader, setRemoveLoader] = useState(false);
	const [projectMessage, setProjectMessage] = useState("");

	// Projects api location
	const projectsApi = "http://localhost:5000/projects";

	// Message from useLocation
	const location = useLocation();
	let message = "";
	if (location.state) {
		message = location.state.message;
	}

	// useEffect to get data from db.json
	useEffect(() => {
		fetch(projectsApi, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
				setRemoveLoader(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Adding remove function on parent component of projectCard
	function removeProject(id) {
		fetch(`${projectsApi}/${id}`, {
			// Back-end delete
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// Front-end delete
				setProjects(projects.filter((project) => project.id !== id));
				setProjectMessage("Projeto removido com sucesso!");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<main className={styles.projectContainer}>
			<div className={styles.titleContainer}>
				<h1>Meus Projetos</h1>
				<LinkButton to="/newproject" text="Criar Projeto" />
			</div>
			{message && <Message type="success" msg={message} />}
			{projectMessage && <Message type="success" msg={projectMessage} />}
			<Container customClass="start">
				{projects.length > 0 &&
					projects.map((project) => (
						<ProjectCard
							id={project.id}
							key={project.id}
							name={project.projName}
							budget={project.projBudget}
							category={project.projType.name}
							handleRemove={removeProject}
						/>
					))}
				{!removeLoader && <Loading />}
				{removeLoader && projects.length === 0 && (
					<p>Não há projetos cadastrados</p>
				)}
			</Container>
		</main>
	);
}

export default Projects;

