import { useState } from "react";

import styles from "../project/styles/ProjectForm.module.css";

import Input from "../form/Input";
import Submit from "../form/Submit";

function ServiceForm({ handleSubmit, btnText, projectData }) {
	const [service, setService] = useState({});

	function submit(e) {
		e.preventDefault();
		projectData.services.push(service);
		handleSubmit(projectData);
	}
	function handleChange(e) {
		setService({ ...service, [e.target.name]: e.target.value });
	}

	return (
		<form onSubmit={submit} className={styles.form}>
			<Input
				type="text"
				text={["Insira o ", <strong>nome</strong>, " do serviço"]}
				name="name"
				placeholder="Nome do serviço"
				handleOnChange={handleChange}
			/>
			<Input
				type="numer"
				text={["Insira o ", <strong>custo</strong>, " do serviço"]}
				name="cost"
				placeholder="Valor do serviço"
				handleOnChange={handleChange}
			/>
			<Input
				type="text"
				text={["Descreva o serviço"]}
				name="description"
				placeholder="Descrição do serviço"
				handleOnChange={handleChange}
			/>
			<Submit text={btnText} />
		</form>
	);
}

export default ServiceForm;

