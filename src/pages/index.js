import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from 'gatsby-image'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-light is-size-4">
                Find out what we've been up to lately
              </h1>
            </div>
            <div className="columns is-multiline">
              {posts
                .map(({ node: post }) => (
                  <div className="column is-half" key={post.id}>
                  <Link to={`\/${post.fields.slug}\/`}>
                    <div className="card">
                      <div className="card-image">
                        <Img style={{height: 300}} className="image is-3by2" fluid={post.frontmatter.heroImage.childImageSharp.fluid} alt={'blog thumbnail'} />
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h2 className="is-marginless">{post.frontmatter.title}</h2>
                          <div>{post.frontmatter.description}</div>
                          <div>{post.frontmatter.date}</div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            heroImage {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
