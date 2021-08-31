import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
	siteTitle,
} from "./layout.module.scss";

interface LayoutProps {
	pageTitle: string;
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site(buildTime: {}) {
				id
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<div className={container}>
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/blog" className={navLinkText}>
							Blog
						</Link>
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