export default {
  left: [
    { label: 'Номер карты:', name: 'card-nubmer', },
    { label: 'Срок действия:', name: 'card-expiration-date', },
  ],
  right: [
    { label: 'Имя владельца:', name: 'owner-name', },
    { label: 'CVC', name: 'CVC', type: 'password', changeableType: true, }
  ]
}