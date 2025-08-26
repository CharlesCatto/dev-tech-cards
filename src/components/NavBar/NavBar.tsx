import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<nav className={styles.navbar} onClick={(e) => e.stopPropagation()}>
			<div className={styles.navContainer}>
				<NavLink to="/" className={styles.navLogo} onClick={closeMobileMenu}>
					DevTech Cards
					<i className="fas fa-code" />
				</NavLink>

				<ul
					className={
						click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
					}
				>
					<li className={styles.navItem}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? `${styles.navLinks} ${styles.active}`
									: styles.navLinks
							}
							onClick={closeMobileMenu}
						>
							Home
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? `${styles.navLinks} ${styles.active}`
									: styles.navLinks
							}
							onClick={closeMobileMenu}
						>
							About
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive
									? `${styles.navLinks} ${styles.active}`
									: styles.navLinks
							}
							onClick={closeMobileMenu}
						>
							Blog
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive
									? `${styles.navLinks} ${styles.active}`
									: styles.navLinks
							}
							onClick={closeMobileMenu}
						>
							Contact
						</NavLink>
					</li>
				</ul>

				<button
					type="button"
					className={styles.navIcon}
					onClick={handleClick}
					aria-label="Toggle navigation menu"
				>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
