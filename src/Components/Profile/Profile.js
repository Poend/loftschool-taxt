import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import data from './data'
import propTypes from 'prop-types'
import { MCIcon } from 'loft-taxi-mui-theme'
import Button from '@material-ui/core/Button'

const Profile = ({ classes }) => {

  const {
    profileLayout,
    headerText,
    subHeaderText,
    card,
    profileWrapper,
    mcIcon,
    label,
    inputItem,
    cardWrapper,
    button
  } = classes

  const [profileData, setProfileData] = useState({})

  const generateInputs = (someArr) => {
    return someArr.map(el => {
      return (
        <div
          className={inputItem}
          key={el.name}>

          <FormLabel
            className={label}
            htmlFor={el.name}>
            {el.label}
          </FormLabel>

          <Input
            type={el.type ? el.type : 'text'}
            id={el.name}
            name={el.name}
            value={profileData[el.name] ? profileData[el.name] : ''}
            onChange={(event) => setProfileData({
              ...profileData,
              [`${event.target.name}`]: event.target.value
            })}
          />

        </div>
      )
    })
  }

  return (
    <div className={profileLayout}>
      <div className={profileWrapper}>
        <p className={headerText}>Профиль</p>
        <p className={subHeaderText}>Способ оплаты</p>
        <div className={cardWrapper}>
          <div className={card}>
            <MCIcon className={mcIcon}/>
            {generateInputs(data.left)}
          </div>
          <div className={card}>
            {generateInputs(data.right)}
          </div>
        </div>
        <Button className={button}>
          Сохранить
        </Button>
      </div>
    </div>
  )
}

Profile.propTypes = {
  classes: propTypes.object
}

export default Profile
