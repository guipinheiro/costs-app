import styles from "./styles/Input.module.css";

function Input({ type, text, name, placeholder, handlerOnChange, value }) {
	return (
		<div className={styles.formControl}>
			<label htmlFor={name}>
				{text.map((textOrHTML, index) => (
					<span key={index}>{textOrHTML}</span>
				))}
				:
			</label>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				id={name}
				onChange={handlerOnChange}
				value={value}
				required
			/>
		</div>
	);
}

export default Input;

