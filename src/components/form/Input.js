import styles from "./styles/Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
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
				onChange={handleOnChange}
				value={value}
				required
				step={type === "number" ? "0.01" : ""}
			/>
		</div>
	);
}

export default Input;

