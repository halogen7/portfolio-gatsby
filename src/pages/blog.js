import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle={"My Blog Posts"}>
			<ul>
				{data.allFile.nodes.map((post) => (
					<li key={post.name}>
						<h1>{post.name}</h1>
						<p>{post.modifiedTime}</p>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export const query = graphql`
	query {
		allFile(filter: { ext: { eq: ".mdx" } }) {
			nodes {
				name
				modifiedTime
			}
		}
	}
`;
export default BlogPage;
