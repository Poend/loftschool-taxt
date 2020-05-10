import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import propTypes from 'prop-types'
import data from './data'
import actions from '../../Redux/Actions'
import { connect } from 'react-redux'

const {
  getAddressList,
  getRoute
} = actions

const Order = ({ classes, addressList, getAddressList, getRoute, route }) => {

  const {
    destinationLayout,
    inputItem,
    button
  } = classes

  const [orderData, setOrderData] = useState({})
  const [coordinates] = useState({ lng: 30.3280539, lat: 59.8298408, zoom: 10.25 })
  const [mapElement, setMapElement] = useState()

  const mapContainer = useRef(null)

  useEffect(() => {
    getAddressList()
  }, [getAddressList])

  useEffect(() => {
    if (mapContainer.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJpeS1seW5rYWdlIiwiYSI6ImNrOHpoOXRiajBycG0zZXRhZ256aTUxaG8ifQ.kd3Zw0dq9lwmO03qe9y1ew'
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coordinates.lng, coordinates.lat],
        zoom: coordinates.zoom
      })
      setMapElement(map)
    }
  }, [coordinates])

  useEffect(() => {
    if (route && route.length > 0 && mapElement) {
      mapElement.on('load', () => {
        mapElement.addSource('route', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': route
            }
          }
        })
        mapElement.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#888',
            'line-width': 8
          }
        });
      })
    }
  }, [route, mapElement])

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
            name={name}
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
        <Button
          onClick={() => getRoute({ address1: orderData.start, address2: orderData.destination })}
          className={button}>
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

const mapStateToProps = ({ componentsData }) => {
  return {
    addressList: componentsData.addressList,
    route: componentsData.route
  }
}

const mapDispatchToProps = { getAddressList, getRoute }

export default connect(mapStateToProps, mapDispatchToProps)(Order)
