import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import styles from "./App.module.css";
import Cards from "../pages/Cards/Cards";

function App() {
	return (
		<Router>
			<div className={styles.app}>
				<NavBar />
				<main className={styles.mainContent}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cards" element={<Cards />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
