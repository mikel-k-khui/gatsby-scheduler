/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/* template
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions // defualt redux actions under the hood
  const template = path.resolve('')
  const {  } = actions


  return graphql(`
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
  `)
  .then(results => {
    // initial data pull
    if (results.error) {
      throw results.error
    }

    // Build the initial react component
    createPage
  })
  .catch(err => {

  })
}
*/
