import { useState, useEffect } from "react";

import styles from "./ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";

function ProjectForm({ btnText }) {
	const [categories, setCategories] = useState([]);

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

	return (
		<form action="" className={styles.formContainer}>
			<Input
				type="text"
				name="projName"
				placeholder="Projeto"
				text={["Insira o ", <strong>nome</strong>, " do projeto"]}
			/>
			<Input
				type="number"
				name="projBudget"
				placeholder="Orçamento"
				text={["Insira o ", <strong>orçamento</strong>, " total"]}
			/>

			<Select
				name="projType"
				text={["Selecione a ", <strong>categoria</strong>]}
				options={categories}
			/>

			<Submit text={btnText} />
		</form>
	);
}

export default ProjectForm;

