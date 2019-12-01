import React from 'react'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  app: {
    textAlign: center,
  },
  logo: {
    width: 20,
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: flex,
    flexDirection: column,
    alignItems: center,
    justifyContent: center,
    fontSize: 14,
    color: white,
  },
  link: {
    color: '#09d3ac',
  },
})