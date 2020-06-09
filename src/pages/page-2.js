import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = props => {
  console.log('DEBUG :: what is in log?', props)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>`Welcome to page 2 API: {process.env.FIREBASE_API_URL}`</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  {
    allInterviewers {
      edges {
        node {
          displayName
          student {
            displayName
          }
        }
      }
    }
  }
`
