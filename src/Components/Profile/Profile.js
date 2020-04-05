import React, { useState } from 'react'

const data = {
  left: [
    { label: 'Номер карты:', name: 'card-nubmer' },
    { label: 'Срок действия:', name: 'card-expiration-date' },
  ],
  right: [
    { label: 'Имя владельца:', name: 'owner-name' },
    { label: 'CVC', name: 'CVC', type: 'password', changeableType: true }
  ]
}


const Profile = () => {

  const [profileData, setProfileData] = useState({})

  const generateInputs = (someArr) => {
    return someArr.map(({label, name, type, changeableType}) => {
      return (
        <div key={name}>

          <label
            htmlFor={name}>
            {label}
          </label>

          <input 
            type={type ? type : 'text'}
            id={name}
            name={name}
            value={profileData[name] ? profileData[name] : ''}
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
    <div>
      {generateInputs(data.left)}
      {generateInputs(data.right)}
    </div>
  )
}

export default Profile