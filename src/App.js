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
import styles from "./App.module.css";

function App() {
	return (
		<>
			<Navbar />
			<Container customClass="minHeight">
				<main className={styles.mainWidth}>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/company" element={<Company />}></Route>
						<Route exact path="/projects" element={<Projects />}></Route>
						<Route exact path="/contact" element={<Contact />}></Route>
						<Route exact path="/newproject" element={<NewProject />}></Route>
					</Routes>
				</main>
			</Container>

			<Footer />
		</>
	);
}

export default App;

