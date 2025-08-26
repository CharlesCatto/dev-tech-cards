import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import styles from "./App.module.css";

function App() {
	return (
		<Router>
			<div className={styles.app}>
				<NavBar />
				<main className={styles.mainContent}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/blog" element={<div>Blog Page</div>} />
						<Route path="/contact" element={<div>Contact Page</div>} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
