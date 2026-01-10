'use client'

import ReactDOM from 'react-dom'

export function PreconnectResources() {
  // Preconnect to critical third-party origins
  ReactDOM.preconnect('https://www.googletagmanager.com')
  ReactDOM.preconnect('https://connect.facebook.net')
  ReactDOM.preconnect('https://www.google-analytics.com')
  ReactDOM.preconnect('https://js.stripe.com')
  ReactDOM.preconnect('https://api.stripe.com')

  return null
}
