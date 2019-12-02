import React, { useState } from 'react'
import { map } from 'lodash'
import { DotLoader } from 'react-spinners'
// import useStyles from './styles'

const Results = ({
  loading,
  searchResults,
  submitted,
}) => (
  <div>
    { loading ? <DotLoader loading={loading} /> :
      searchResults.length ? map(searchResults, (_result) => 'result') : 
        <p>{ submitted ? 'No results found.' : 'Please enter query and click SEARCH button above, results appear here.'  }</p>
    }
  </div>
)

export default Results