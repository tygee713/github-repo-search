import React from 'react'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <img src={'logo.png'} className={classes.logo} alt="logo" />
      </header>
      <div className={classes.body}>
        <Form />
      </div>
      <footer className={classes.footer}>
        2017 Even Financial, Inc. - CONFIDENTIAL
      </footer>
    </div>
  )
}

export default App
