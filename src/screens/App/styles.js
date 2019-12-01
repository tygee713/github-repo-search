import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  app: {
  },
  logo: {
    height: 40,
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 14,
    color: 'white',
    padding: '0 25%',
  },
  link: {
    color: '#09d3ac',
  },
})

export default useStyles