import React from 'react'
import logo from '../public/logo.png'
import styles from './styles.js'

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        
      </header>
    </div>
  )
}

export default App
