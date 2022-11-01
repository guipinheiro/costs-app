import styles from "./styles/Select.module.css";

function Select({ text, name, options, handlerOnChange, value }) {
	return (
		<div className={styles.formControl}>
			<label htmlFor={name}>
				{text.map((textOrHTML, index) => (
					<span key={index}>{textOrHTML}</span>
				))}
				:
			</label>
			<select name={name} id={name}>
				<option disabled>Selecione a categoria</option>
				{/* {options.map((option, key) => {
                    return <option key={key}></option>
                })} */}
			</select>
		</div>
	);
}

export default Select;

