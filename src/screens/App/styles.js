import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  body: {
    color: '#333333',
    flex: 1,
  },
  logo: {
    height: 20,
  },
  footer: {
    backgroundColor: '#3F87C6',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'flex-end',
    fontSize: 12,
    color: 'white',
    padding: '0 17%',
  },
  header: {
    backgroundColor: '#3F87C6',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    justifySelf: 'flex-start',
    fontSize: 14,
    color: 'white',
    padding: '0 17%',
  },
  link: {
    color: '#09d3ac',
  },
})

export default useStyles