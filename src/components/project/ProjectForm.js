import styles from "./ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";

function ProjectForm({ btnText }) {
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
			/>

			<Submit text={btnText} />
		</form>
	);
}

export default ProjectForm;

