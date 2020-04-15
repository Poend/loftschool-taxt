import React, { useState } from 'react'
// import { authContext } from '../../Context/AuthContext'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import { data } from './data'
import actions from '../../Redux/Actions'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const { setAuthStatus } = actions

const Form = ({ classes, user }) => {
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

  const [authType, setAuthType] = useState('signin')
  const [formData, setFormData] = useState({})

  // const auth = useContext(authContext)

  const changeAuthType = (event, authType) => {
    event.preventDefault()
    setAuthType(authType === 'signin' ? 'signup' : 'signin')
  }

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
    if(formData.login === user.login && formData.password === user.password){
      setAuthStatus(true)
    }
  }

  return (
    <div className={formLayout}>
      <div className={formHeader}>
        <h1 className={h1}>
          {data[authType].headerText}
        </h1>
        <p>
          {data[authType].subscription}
          <Link className={link} href="/" onClick={(event) => changeAuthType(event, authType)}>
            {data[authType].linkText}
          </Link>
        </p>
      </div>
      <form className={form} onSubmit={(event) => submit(event)}>
        {generateInputs(data[authType].inputs)}
        <Button className={button} type='submit'>
          {data[authType].buttonText}
        </Button>
      </form>
    </div>
  )
}

// prop-types
Form.propTypes = {
  classes: propTypes.object,
  user: propTypes.object.isRequired
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}


export default connect(mapStateToProps)(Form)