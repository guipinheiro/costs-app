// Libs
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

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
					<Route exact path="/company" element={<Company />}></Route>
					<Route exact path="/projects" element={<Projects />}></Route>
					<Route exact path="/contact" element={<Contact />}></Route>
					<Route exact path="/newproject" element={<NewProject />}></Route>
				</Routes>
			</Container>

			<Footer />
		</>
	);
}

export default App;

