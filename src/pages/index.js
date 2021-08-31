import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
	return (
		<Layout pageTitle={"Home Page"}>
			<p>Making a website using the Gatsby tutorial.</p>
			<StaticImage
				alt="Sphynx cat, Gremlin, sleeping soundly in soft blankets"
				src="../images/gremlin.jpg"
			/>
		</Layout>
	);
};

export default IndexPage;
