import styles from "./styles/Loading.module.css";

import loading from "../../img/loading.svg";

function Loading() {
	return (
		<div className={styles.loaderContainer}>
			<img src={loading} alt="Loading icon spinning" className={styles.loader} />
		</div>
	);
}

export default Loading;

