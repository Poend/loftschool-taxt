import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Registration from './Registration'
import Authentication from './Authentication'

const RegWithStyles = (props) => {
  const { classes, ...other } = props

  return <Registration classes={classes} {...other} />
}

const AuthWithStyles = (props) => {
  const { classes, ...other } = props

  return <Authentication classes={classes} {...other} />
}

export default {
  Authentication: withStyles(styles)(AuthWithStyles),
  Registration: withStyles(styles)(RegWithStyles)
}