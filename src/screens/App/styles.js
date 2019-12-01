import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  body: {
    flex: 1,
  },
  logo: {
    height: 40,
  },
  footer: {
    backgroundColor: '#282c34',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    justifySelf: 'flex-end',
    fontSize: 14,
    color: 'white',
    padding: '0 25%',
  },
  header: {
    backgroundColor: '#282c34',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    justifySelf: 'flex-start',
    fontSize: 14,
    color: 'white',
    padding: '0 25%',
  },
  link: {
    color: '#09d3ac',
  },
})

export default useStyles