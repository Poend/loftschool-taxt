import Form from './Form'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const ComponentWithStyles = (props) => {
  const { classes, ...other } = props

  return <Form classes={classes} {...other} />
}

export default withStyles(styles)(ComponentWithStyles)