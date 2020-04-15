import Header from './Header'
import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const ComponentsWithStyles = (props) => {
  const { classes, ...other } = props
  return <Header classes={classes} {...other} />
}


export default withStyles(styles)(ComponentsWithStyles)