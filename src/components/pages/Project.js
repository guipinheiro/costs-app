import styles from "./styles/Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
	const { id } = useParams();
	const [project, setProject] = useState("");
	const projectsApi = "http://localhost:5000/projects/";
	useEffect(() => {
		fetch(`${projectsApi}${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProject(data);
			})
			.catch((err) => {
				throw err;
			});
	}, [id]);

	return <p>{project.projName}</p>;
}

export default Project;

