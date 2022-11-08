import styles from "./styles/Projects.module.css";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

function Projects() {
	// State to save projects
	const [projects, setProjects] = useState([]);

	// Message from useLocation
	const location = useLocation();
	let message = "";
	if (location.state) {
		message = location.state.message;
	}

	// useEffect to get data from db.json
	useEffect(() => {
		fetch("http://localhost:5000/projects", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
				//console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main className={styles.projectContainer}>
			<div className={styles.titleContainer}>
				<h1>Meus Projetos</h1>
				<LinkButton to="/newproject" text="Criar Projeto" />
			</div>
			{message && <Message type="success" msg={message} />}
			<Container customClass="start">
				{projects.length > 0 &&
					projects.map((project) => (
						<ProjectCard
							id={project.id}
							key={project.id}
							name={project.projName}
							budget={project.projBudget}
							category={project.projType.name}
						/>
					))}
			</Container>
		</main>
	);
}

export default Projects;

