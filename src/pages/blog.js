import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout/layout";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle={"My Blog Posts"}>
			{data.allMdx.nodes.map((post) => (
				<article key={post.id}>
					<h2>{post.frontmatter.title}</h2>
					<p>Posted on {post.parent.modifiedTime}</p>
					<MDXRenderer>{post.body}</MDXRenderer>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					title
				}
				id
				body
				parent {
					... on File {
						modifiedTime(formatString: "MMMM D, YYYY")
					}
				}
			}
		}
	}
`;
export default BlogPage;
