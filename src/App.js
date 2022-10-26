// Libs
import { Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

function App() {
	return (
		<>
			<nav>
				<ul>
					<Link to={"/"}>Home</Link>
					<Link to={"/company"}>Sobre Nós</Link>
					<Link to={"/contact"}>Contato</Link>
					<Link to={"/newproject"}>Novo Projeto</Link>
				</ul>
			</nav>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/company" element={<Company />}></Route>
				<Route exact path="/contact" element={<Contact />}></Route>
				<Route exact path="/newproject" element={<NewProject />}></Route>
			</Routes>

			<footer>
				<p>Footer</p>
			</footer>
		</>
	);
}

export default App;

