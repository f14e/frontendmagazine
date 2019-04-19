import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";
import Footer from "components/Footer/Footer";
import { rhythm, scale } from "utils/typography";
import ReadingTimeEstimate from "components/ReadingTimeEstimate/ReadingTimeEstimate";
import "./blog-post.css";

const BlogPostTemplate = ({
  data: {
    markdownRemark: post,
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
  pageContext: { previous, next },
  location,
}) => {
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
        }}
      >
        <time>{post.frontmatter.date}</time> · Время чтения:{" "}
        <ReadingTimeEstimate
          minutes={Math.round(post.fields.readingTime.minutes)}
        />
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      <Footer />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "ru")
        description
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;
