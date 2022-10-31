import styles from "./ProjectForm.module.css";

function ProjectForm() {
	return (
		<form action="" className={styles.formContainer}>
			<label htmlFor="projName">
				Insira o <strong>nome</strong> do projeto:
			</label>
			<input type="text" placeholder="Projeto" id="projName" name="projName" required />
			<label htmlFor="projBudget">
				Insira o <strong>orçamento</strong> total:
			</label>
			<input type="number" placeholder="Orçamento" id="`projBudget`" name="projBudget" required />
			<label htmlFor="projType">
				categoria Selecione a <strong>categoria</strong>:
			</label>
			<select name="projType" id="projType" required>
				<option disabled>Selecione a categoria</option>
			</select>
			<input type="submit" value="Enviar" />
		</form>
	);
}

export default ProjectForm;

