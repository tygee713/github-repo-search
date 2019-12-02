import React, { useState } from 'react'
import { map } from 'lodash'
import { DotLoader } from 'react-spinners'
import useStyles from './styles'

const Results = ({
  loading,
  searchResults,
  submitted,
}) => {
  const classes = useStyles()
  return (
    <div>
      { loading ? <DotLoader loading={loading} /> :
        searchResults.length ? <p className={classes.results}>Search Results:</p> :
          <p>{ submitted ? 'No results found.' : 'Please enter query and click SEARCH button above, results appear here.'  }</p>
      }
      { map(searchResults, (result) => {
        const { name, owner, url, description, stargazers_count: stargazersCount, license, fork } = result || {}
        return (
          <div>
            <p>{ name }</p>
            { owner && <p>{ owner.login }</p> }
            <p>{ url }</p>
            <p>{ description }</p>
            <p>{ stargazersCount }</p>
            { license && <p>{ license.name }</p> }
            <p>{ fork }</p>
          </div>
        )
      }) }
    </div>
  )
}

export default Results