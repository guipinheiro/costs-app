import styles from "./styles/Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
	return (
		<div className={styles.formControl}>
			<label htmlFor={name}>
				{text.map((textOrHTML, index) => (
					<span key={index}>{textOrHTML}</span>
				))}
				:
			</label>
			<select
				name={name}
				id={name}
				onChange={handleOnChange}
				value={value || ""}
				required
			>
				<option disabled value="" hidden>
					Selecione a categoria
				</option>
				{options.map((option) => (
					<option value={option.id} key={option.id}>
						{option.name}
					</option>
				))}
				;
			</select>
		</div>
	);
}

export default Select;

