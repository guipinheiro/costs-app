import { useState, useEffect } from "react";

import styles from "./ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";

function ProjectForm({ btnText, handleSubmit, projectData }) {
	const [categories, setCategories] = useState([]);
	const [project, setProject] = useState(projectData || {});

	// Get categories for select component (categories) from db.json
	useEffect(() => {
		fetch("http://localhost:5000/categories", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setCategories(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Create function to prevent default behavior of submit button and submit project
	const submit = (e) => {
		e.preventDefault();
		handleSubmit(project);
	};

	// Handle input changes on projects
	const handleChange = (e) => {
		setProject({ ...project, [e.target.name]: e.target.value });
	};

	// Handle category changes on projects
	const handleCategory = (e) => {
		setProject({
			...project,
			projType: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		});
	};

	return (
		<form action="" className={styles.formContainer} onSubmit={submit}>
			<Input
				type="text"
				name="projName"
				placeholder="Projeto"
				text={["Insira o ", <strong>nome</strong>, " do projeto"]}
				handleOnChange={handleChange}
				value={project.projName ? project.projName : ""}
			/>
			<Input
				type="number"
				name="projBudget"
				placeholder="Orçamento"
				text={["Insira o ", <strong>orçamento</strong>, " total"]}
				handleOnChange={handleChange}
				value={project.projBudget ? project.projBudget : ""}
			/>

			<Select
				name="projType"
				text={["Selecione a ", <strong>categoria</strong>]}
				options={categories}
				handleOnChange={handleCategory}
				value={project.projType ? project.projType.id : ""}
			/>

			<Submit text={btnText} />
		</form>
	);
}

export default ProjectForm;

