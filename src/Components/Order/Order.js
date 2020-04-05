import React, { useState } from 'react'

const data = [
  { label: 'Откуда', name: 'start' },
  { label: 'Куда', name: 'destination' }
]

const Order = () => {

  const [orderData, setOrderData] = useState({})

  const generateInputs = (someArr) => {
    return someArr.map(({ label, name }) => {
      return (
        <div key={name}>
          <label
            htmlFor={name}>
            {label}
          </label>
          <input
            name={name}
            id={name}
            value={orderData[name] ? orderData[name] : ''}
            onChange={(event) => setOrderData({
              ...orderData,
              [`${event.target.name}`]: event.target.value
            })}
          />
        </div>
      )
    })
  }

  return (
    <div>
      {generateInputs(data)}
    </div>
  )
}

export default Order