import Profile from './Profile'
import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const ComponentsWithStyles = (props) => {
  const { classes, ...other } = props
  return <Profile classes={classes} {...other} />
}

export default withStyles(styles)(ComponentsWithStyles)