import { useLocation } from "react-router-dom";

import Message from "../layout/Message";

function Projects() {
	const location = useLocation();
	let message = "";
	if (location.state) {
		message = location.state.message;
	}

	return (
		<main>
			<h1>Meus Projetos</h1>
			{message && <Message type="success" msg={message} />}
		</main>
	);
}

export default Projects;

