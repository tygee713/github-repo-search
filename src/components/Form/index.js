import React, { useState } from 'react'
import useStyles from './styles'
import { forOwn } from 'lodash'
import useForm from 'react-hook-form'

const Form = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [formValues, setFormValues] = useState({})

  const createApiRequest = () => {
    setLoading(true)
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data
        setSearchResults({ persons })
        setLoading(false)
      })
  }

  const handleUserInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({ [name]: value }, () => { this.validateInputField(name, value) })
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
      <input
        name="text"
        onChange={(event) => this.handleUserInput(event)}
        value={formValues.text}
      />
      {errors.text && errors.text.message}

      <input
        name="stars"
        onChange={(event) => this.handleUserInput(event)}
        value={formValues.stars}
      />
      {errors.stars && errors.stars.message}

      <input
        name="license"
        onChange={(event) => this.handleUserInput(event)}
        value={formValues.license}
      />
      {errors.license && errors.license.message}

      <input
        name="includeForked"
        onChange={(event) => this.handleUserInput(event)}
        value={formValues.includeForked}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
