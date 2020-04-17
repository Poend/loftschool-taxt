import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import propTypes from 'prop-types'
import data from './data'

mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJpeS1seW5rYWdlIiwiYSI6ImNrOHpoOXRiajBycG0zZXRhZ256aTUxaG8ifQ.kd3Zw0dq9lwmO03qe9y1ew'

const Order = ({ classes }) => {

  const {
    destinationLayout,
    inputItem,
    button
  } = classes

  const [orderData, setOrderData] = useState({})
  const [coordinates] = useState({ lng: 37.6170572, lat: 55.752139, zoom: 10.25 })

  const mapContainer = useRef(null)

  useEffect(() => {
    if (mapContainer.current) {
      new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coordinates.lng, coordinates.lat],
        zoom: coordinates.zoom
      })
    }
  }, [coordinates])

  const generateInputs = (someArr) => {
    return someArr.map(({ label, name }) => {
      return (
        <div
          className={inputItem}
          key={name}>
          <FormLabel
            htmlFor={name}>
            {label}
          </FormLabel>
          <Input
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
    <div style={{ height: '100%', position: 'relative' }}>
      <div className={destinationLayout}>
        {generateInputs(data)}
        <Button className={button}>
          Вызвать такси
        </Button>
      </div>
      <div
        className='mapContainer'
        ref={mapContainer}
        style={{
          height: '100%'
        }}>
      </div>
    </div>
  )
}

// prop-types
Order.propTypes = {
  classes: propTypes.object
}

export default Order
