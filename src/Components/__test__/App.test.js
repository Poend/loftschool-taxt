import React from 'react'
import App from '../App'
import AuthContext from '../../Context'
import { BrowserRouter as Router } from 'react-router-dom'
import {render} from '@testing-library/react'

describe('full app', () => {
  it('render without errors', () => {
    render(<Router><AuthContext><App /></AuthContext></Router>);
  })
})