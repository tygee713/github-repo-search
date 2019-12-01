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

      </div>
      <footer className={classes.footer}>
      </footer>
    </div>
  )
}

export default App
