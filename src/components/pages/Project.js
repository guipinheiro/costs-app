import styles from "./styles/Project.module.css";

import { parse, v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../services/ServiceForm";
import ServiceCard from "../services/ServiceCard";

function Project() {
	const { id } = useParams();
	const [project, setProject] = useState("");
	const [services, setServices] = useState([]);
	const [showProjectForm, setShowProjectForm] = useState(false);
	const [showServiceForm, setShowServiceForm] = useState(false);
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
				setServices(data.services);
			})
			.catch((err) => {
				throw err;
			});
	}, [id]);

	// Adding services
	function createService(project) {
		setMessage("");
		setType("");

		// Getting last Service
		const lastService = project.services[project.services.length - 1];
		lastService.id = uuidv4();

		const lastServiceCost = lastService.cost;

		const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

		// Max value validation

		if (newCost > parseFloat(project.projBudget)) {
			setMessage("Orçamento ultrapassado! Revise o valor do serviço");
			setType("error");
			project.services.pop();
			return;
		}

		// Add service cost to total cost
		project.cost = newCost;

		// update Projects on db.json
		fetch(`${projectsApi}${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(project),
		})
			.then((res) => res.json())
			.then((data) => {
				// exibir os serviços
				setShowServiceForm(false);
			})
			.catch((err) => console.log(err));
	}

	function removeService(id, cost) {
		setMessage("");
		const servicesUpdated = project.services.filter((service) => service.id !== id);
		const projectUpdated = project;

		projectUpdated.services = servicesUpdated;
		projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

		fetch(`${projectsApi}${projectUpdated.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(projectUpdated),
		})
			.then((res) => res.json())
			.then((data) => {
				setProject(projectUpdated);
				setServices(servicesUpdated);
				setMessage("Serviço removido com sucesso");
				setType("success");
			})
			.catch((err) => console.log(err));
	}

	// For editing the form
	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm);
		setMessage("");
	}

	function toggleServiceForm() {
		setShowServiceForm(!showServiceForm);
		setMessage("");
	}

	function editPost(project) {
		setMessage("");

		// Budget Validation
		if (project.projBudget < project.cost) {
			setMessage("Orçamento menor que custo total do projeto!");
			setType("error");
			return false;
		}
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

						{/* Project details container */}
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

						{/* Services container */}
						<div className={styles.serviceFormContainer}>
							<h2>Adicione um serviço</h2>
							<button onClick={toggleServiceForm} className={styles.btn}>
								{!showServiceForm ? "Novo serviço" : "Fechar"}
							</button>
							<div className={styles.projectInfo}>
								{showServiceForm && (
									<ServiceForm
										btnText="Adicionar"
										handleSubmit={createService}
										projectData={project}
									/>
								)}
							</div>
						</div>

						{/* Services details */}
						<h2>Serviços</h2>
						<Container customClass="start">
							{services.length > 0 &&
								services.map((service) => (
									<ServiceCard
										id={service.id}
										name={service.name}
										cost={service.cost}
										description={service.description}
										key={service.id}
										handleRemove={removeService}
									/>
								))}
							{services.length === 0 && <p>Não há serviços cadastrados</p>}
						</Container>
					</Container>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Project;

