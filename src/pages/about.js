import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = ({ data }) => (
    <Layout>
        <SEO title="about page" />
        <h2>{data.site.siteMetadata.title}</h2>
        <div>{data.site.siteMetadata.description}</div>
        <Link to="/">Back to home</Link>
    </Layout>
)

export default aboutPage

export const query = graphql ` 
    query {
        site(siteMetadata: {}) {
            siteMetadata {
                description
                title
                author
            }
        }
   }
`
