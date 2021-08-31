import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle={"My Blog Posts"}>
			{data.allMdx.nodes.map((post) => (
				<article key={post.id}>
					<h2>
						<Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
					</h2>
					<p>Posted on {post.parent.modifiedTime}</p>
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
				slug
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
