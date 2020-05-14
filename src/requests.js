
export default async (request) => {
  switch (request.type) {
    case 'registration':
      return fetch('https://loft-taxi.glitch.me/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...request.payload
        })
      })
        .then(response => {
          return response.json()
        })
        .then(data => data)
    case 'login':
      return fetch('https://loft-taxi.glitch.me/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...request.payload
        })
      })
        .then(response => {
          return response.json()
        })
        .then(data => data)
    case 'addresslist':
      return fetch('https://loft-taxi.glitch.me/addressList', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => {
          return response.json()
        })
        .then(data => data)
    case 'route':
      return fetch('https://loft-taxi.glitch.me/route', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => {
          return response.json()
        })
        .then(data => data)
    default:
      break;
  }
}