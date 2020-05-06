import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import data from './data'
import propTypes from 'prop-types'
import actions from '../../../Redux/Actions'
import { connect } from 'react-redux'

const { changeFormType, registration } = actions

const Registration = ({ classes, changeFormType, reg }) => {

  const {
    formLayout,
    formHeader,
    h1,
    inputItem,
    label,
    link,
    button,
    form
  } = classes

  const [formData, setFormData] = useState({})

  const generateInputs = (someArr) => {
    return someArr.map(el => {
      return (
        <div
          className={inputItem}
          key={el.label}>

          <FormLabel
            className={label}
            htmlFor={el.name}>
            {el.label}
          </FormLabel>

          <Input
            autoComplete='off'
            type={el.type}
            required={el.required}
            name={el.name}
            id={el.name}
            value={formData[el.name] ? formData[el.name] : ''}
            onChange={(event) => setFormData({
              ...formData,
              [`${event.target.name}`]: event.target.value
            })}
          />
        </div>
      )
    })
  }

  const submit = (event) => {
    event.preventDefault()
    reg(formData)
  }

  return (
    <div className={formLayout}>
      <div className={formHeader}>
        <h1 data-testid='header' className={h1}>
          {data.headerText}
        </h1>
        <p>
          {data.subscription}
          <Link
            data-testid='change-auth-type'
            className={link}
            href="#"
            onClick={() => changeFormType()}>
            {data.linkText}
          </Link>
        </p>
      </div>
      <form className={form} onSubmit={(event) => submit(event)}>
        {generateInputs(data.inputs)}
        <Button role='submit' className={button} type='submit'>
          {data.buttonText}
        </Button>
      </form>
    </div>
  )
}

Registration.propTypes = {
  classes: propTypes.object.isRequired
}

const mapStateToProps = ({ system }) => {
  return {
    isAuthForm: system.isAuthForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormType: () => dispatch(changeFormType()),
    reg: (formData) => dispatch(registration(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
