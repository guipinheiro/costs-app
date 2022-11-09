// Libs
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

// Styling
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Container customClass="minHeight">
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/company" element={<Company />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/newproject" element={<NewProject />}></Route>
					<Route path="/projects/:id" element={<Project />}></Route>
				</Routes>
			</Container>

			<Footer />
		</>
	);
}

export default App;

