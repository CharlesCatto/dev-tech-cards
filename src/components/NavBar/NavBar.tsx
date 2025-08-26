import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick((prev) => !prev);
	const closeMobileMenu = () => setClick(false);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/cards", label: "Cards" },
		{ path: "/about", label: "About" },
	];

	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				<NavLink to="/" className={styles.navLogo} onClick={closeMobileMenu}>
					DevTech Cards <i className="fas fa-code" />
				</NavLink>

				<ul
					className={
						click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
					}
				>
					{navItems.map((item) => (
						<li key={item.path} className={styles.navItem}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive
										? `${styles.navLinks} ${styles.active}`
										: styles.navLinks
								}
								onClick={closeMobileMenu}
								end
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>

				<button
					type="button"
					className={styles.navIcon}
					onClick={handleClick}
					aria-label={click ? "Close navigation menu" : "Open navigation menu"}
				>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
