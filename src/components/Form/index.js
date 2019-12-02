import React, { useState } from 'react'
// import useStyles from './styles'
import { forOwn } from 'lodash'
import axios from 'axios'

const Form = () => {
  // const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [formValues, setFormValues] = useState({
    text: '',
    stars: '',
    license: '',
    includeForked: false,
  })

  const createApiRequest = () => {
    setLoading(true)
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data
        setSearchResults({ persons })
        setLoading(false)
      })
  }

  const handleUserInput = (e) => {
    const { checked, name, type, value } = e.target
    const valueOrChecked = type === 'checkbox' ? checked : value
    setFormValues({ [name]: valueOrChecked }, () => { validateInputField(name, valueOrChecked) })
  }

  const validateInputField = (name, value) => {
    switch (name) {
      case 'text':
      case 'stars':
      case 'license':
    }
  }

  const onSubmit = () => {
    !errors && createApiRequest()
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Text:
        <input
          name="text"
          onChange={(event) => handleUserInput(event)}
          value={formValues.text}
        />
      </label>
      { errors.text && errors.text.message }
      <label>
        Stars:
        <input
          name="stars"
          onChange={(event) => handleUserInput(event)}
          value={formValues.stars}
        />
      </label>
      { errors.stars && errors.stars.message }
      <label>
        License:
          <input
          name="license"
          onChange={(event) => handleUserInput(event)}
          value={formValues.license}
        />
      </label>
      { errors.license && errors.license.message }
      <label>
        Include Forked?
          <input
          checked={formValues.includeForked}
          name="includeForked"
          onChange={(event) => handleUserInput(event)}
          type="checkbox"
        />
      </label>
      <button type="submit">SEARCH</button>
    </form>
  )
}

export default Form
