import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
// import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import propTypes from 'prop-types'
import data from './data'
import request from '../../requests'
import actions from '../../Redux/Actions'
import { connect } from 'react-redux'


const Order = ({ classes, addressList, getAddressList }) => {
  
  const {
    destinationLayout,
    inputItem,
    button
  } = classes
  
  const [orderData, setOrderData] = useState({})
  const [coordinates] = useState({ lng: 37.6170572, lat: 55.752139, zoom: 10.25 })
  
  const mapContainer = useRef(null)
  
  useEffect(() => {
    request({ type: 'addresslist' })
    .then(res => getAddressList(res.addresses))
  }, [getAddressList])
  
  useEffect(() => {
    if (mapContainer.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJpeS1seW5rYWdlIiwiYSI6ImNrOHpoOXRiajBycG0zZXRhZ256aTUxaG8ifQ.kd3Zw0dq9lwmO03qe9y1ew'
      new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coordinates.lng, coordinates.lat],
        zoom: coordinates.zoom
      })
    }
  }, [coordinates])

  const generateSelects = (someArr) => {
    return someArr.map(({ label, name }) => {
      return (
        <div
          className={inputItem}
          key={name}>
          <FormLabel>
            {label}
          </FormLabel>
          <Select
            name={orderData[name] ? orderData[name] : ''}
            onChange={(event) => setOrderData({
              ...orderData,
              [`${event.target.name}`]: event.target.value
            })}
          >
            {generateOptions(addressList)}
          </Select>
        </div>
      )
    })
  }

  const generateOptions = (someArr) => {
    return someArr.map(el => {
      return <option key={el} value={el}>{el}</option>
    })
  }

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div className={destinationLayout}>
        {generateSelects(data)}
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

const { getAddressList } = actions

const mapStateToProps = ({ addressList }) => {
  return {
    addressList: addressList.addressList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAddressList: (addressArr) => dispatch(getAddressList(addressArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
