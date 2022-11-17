import { useState, useEffect } from "react";

import styles from "./styles/Message.module.css";

function Message({ type, msg }) {
	// Condition to check if you have a message or not and make it visible then hide it after 3s
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		if (!msg) {
			setVisible(false);
			return;
		}
		setVisible(true);

		const timer = setTimeout(() => {
			setVisible(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [msg]);

	return (
		<>{visible && <div className={`${styles.message} ${styles[type]}`}>{msg}</div>}</>
	);
}

export default Message;

