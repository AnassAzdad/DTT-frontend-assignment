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
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        address: 'Neude 8',
        postalCode: '3512 AG',
        city: 'Utrecht',
        price: 610000,
        size: 105,
        bedrooms: 3,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        address: 'Markt 12',
        postalCode: '6211 CH',
        city: 'Maastricht',
        price: 430000,
        size: 90,
        bedrooms: 2,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        address: 'Grote Markt 5',
        postalCode: '9712 HN',
        city: 'Groningen',
        price: 480000,
        size: 98,
        bedrooms: 3,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        address: 'Stationsweg 21',
        postalCode: '6811 KG',
        city: 'Arnhem',
        price: 390000,
        size: 85,
        bedrooms: 2,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        address: 'Lange Poten 10',
        postalCode: '2511 CL',
        city: 'Den Haag',
        price: 670000,
        size: 115,
        bedrooms: 4,
        bathrooms: 2,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        address: 'Oudezijds Voorburgwal 77',
        postalCode: '1012 ET',
        city: 'Amsterdam',
        price: 820000,
        size: 130,
        bedrooms: 4,
        bathrooms: 2,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 9,
        address: 'Spoorstraat 14',
        postalCode: '1815 BM',
        city: 'Alkmaar',
        price: 410000,
        size: 88,
        bedrooms: 2,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 10,
        address: 'Korenmarkt 3',
        postalCode: '2311 EK',
        city: 'Leiden',
        price: 560000,
        size: 102,
        bedrooms: 3,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 11,
        address: 'Visserstraat 9',
        postalCode: '7411 JH',
        city: 'Deventer',
        price: 370000,
        size: 80,
        bedrooms: 2,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 12,
        address: 'Havenweg 6',
        postalCode: '3841 KM',
        city: 'Harderwijk',
        price: 445000,
        size: 92,
        bedrooms: 3,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 13,
        address: 'Dorpsstraat 18',
        postalCode: '3941 JK',
        city: 'Doorn',
        price: 590000,
        size: 110,
        bedrooms: 3,
        bathrooms: 2,
        image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 14,
        address: 'Westplein 2',
        postalCode: '3016 BM',
        city: 'Rotterdam',
        price: 710000,
        size: 125,
        bedrooms: 4,
        bathrooms: 2,
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 15,
        address: 'Noorderplantsoen 1',
        postalCode: '9717 MB',
        city: 'Groningen',
        price: 465000,
        size: 97,
        bedrooms: 3,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 16,
        address: 'Burgwal 22',
        postalCode: '2611 GJ',
        city: 'Delft',
        price: 540000,
        size: 100,
        bedrooms: 3,
        bathrooms: 1,
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }),

  actions: {
    addHouse(house) {
      this.houses.push({
        ...house,
        id: Date.now()
      })
    }
  }
})
