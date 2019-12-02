import React, { useState } from 'react'
// import useStyles from './styles'

const Inputs = ({
  createApiRequest,
  formValues,
  loading,
  setFormValues,
}) => {
  // const classes = useStyles()
  const [errors, setErrors] = useState({})

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
      default: 
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

export default Inputs