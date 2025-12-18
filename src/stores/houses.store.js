import { defineStore } from 'pinia'

export const useHousesStore = defineStore('houses', {
  state: () => ({
    houses: [
      {
        id: 1,
        address: 'Keizersgracht 123',
        postalCode: '1015 CJ',
        city: 'Amsterdam',
        price: 750000,
        size: 120,
        bedrooms: 3,
        bathrooms: 2,
        image: 'https://via.placeholder.com/300x200'
      },
      {
        id: 2,
        address: 'Coolsingel 45',
        postalCode: '3011 AD',
        city: 'Rotterdam',
        price: 520000,
        size: 95,
        bedrooms: 2,
        bathrooms: 1,
        image: 'https://via.placeholder.com/300x200'
      }
    ]
  })
})
