// import React, { useState } from 'react'

// const data = [
//   { label: 'Откуда', name: 'start' },
//   { label: 'Куда', name: 'destination' }
// ]

// const Order = () => {

//   const [orderData, setOrderData] = useState({})

//   const generateInputs = (someArr) => {
//     return someArr.map(({ label, name }) => {
//       return (
//         <div key={name}>
//           <label
//             htmlFor={name}>
//             {label}
//           </label>
//           <input
//             name={name}
//             id={name}
//             value={orderData[name] ? orderData[name] : ''}
//             onChange={(event) => setOrderData({
//               ...orderData,
//               [`${event.target.name}`]: event.target.value
//             })}
//           />
//         </div>
//       )
//     })
//   }

//   return (
//     <div>
//       {generateInputs(data)}
//     </div>
//   )
// }

// export default Order

import React, { Component } from 'react'

const data = [
  { label: 'Откуда', name: 'start' },
  { label: 'Куда', name: 'destination' }
]

export default class Order extends Component {

  state = {
    orderData: {}
  }

  setInputValue = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    })
  }

  generateInputs = (someArr) => {
    const { orderData } = this.state
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
            value={orderData[name]}
            onChange={(event) => this.setInputValue(event)}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <>
        {this.generateInputs(data)}
      </>
    )
  }
}
