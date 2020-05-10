export default {
  left: [
    { label: 'Номер карты:', name: 'cardNumber', },
    { label: 'Срок действия:', name: 'expiryDate', },
  ],
  right: [
    { label: 'Имя владельца:', name: 'cardName', },
    { label: 'CVC', name: 'cvc', type: 'password', changeableType: true, }
  ]
}