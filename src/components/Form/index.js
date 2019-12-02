import React, { useState } from 'react'
import useStyles from './styles'
import Inputs from './Inputs/index'
import Results from './Results/index'
import axios from 'axios'

const Form = () => {
  const classes = useStyles()
  const [formValues, setFormValues] = useState({
    text: '',
    stars: '',
    license: '',
    includeForked: false,
  })
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const createApiRequest = () => {
    setLoading(true)
    const { text, stars, license, includeForked } = formValues
    const starsString = stars ? `+stars:${stars}` : ''
    const licenseString = license ? `+license:${license}` : ''
    const includeForkedString = includeForked ? `+fork:${includeForked}` : ''
    const url = `https://api.github.com/search/repositories?q=${text}${starsString}${licenseString}${includeForkedString}`
    axios.get(url).then((res) => {
      const persons = res.data
      console.log(persons)
      setSearchResults({ persons })
      setLoading(false)
      setSubmitted(true)
    })
  }

  return (
    <div className={classes.body}>
      <p className={classes.title}>Even Financial GitHub Repository Search</p>
      <Inputs 
        createApiRequest={createApiRequest}
        formValues={formValues}
        loading={loading}
        setFormValues={setFormValues}
      />
      <hr />
      <Results
        loading={loading}
        searchResults={searchResults}
        submitted={submitted}
      />
    </div>
  )
}

export default Form
