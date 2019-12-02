import React, { useState } from 'react'
// import useStyles from './styles'
import Inputs from './Inputs/index'
import Results from './Results/index'
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
    <>
    <h1>Even Financial GitHub Repository Search</h1>
    <Inputs 
      createApiRequest={createApiRequest} 
      loading={loading}
    />
    <hr />
    <Results />
    </>
  )
}

export default Form
