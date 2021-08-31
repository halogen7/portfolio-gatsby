import React from "react";
import { Link } from "gatsby";
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
} from "./layout.module.scss";

const Layout = ({ pageTitle, children }) => {
	return (
		<div className={container}>
			<title>{pageTitle}</title>
			<nav className={navLinks}>
				<ul className={navLinkItem}>
					<li className={navLinkText}>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
