import React from 'react'
import Star from './Star'

const character =  {
  "id": 361,
  "name": "Toxic Rick",
  "status": "Dead",
  "species": "Humanoid",
  "type": "Rick's Toxic Side",
  "gender": "Male",
  "origin": {
    "name": "Alien Spa",
    "url": "https://rickandmortyapi.com/api/location/64"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/27"
  ],
  "url": "https://rickandmortyapi.com/api/character/361",
  "created": "2018-01-10T18:20:41.703Z"
}

describe('<Star />', () => {
  it('renders', () => {
    cy.mount(<Star character={character} />)
  })

  it('toggles', () => {
    cy.mount(<Star character={character} />)
    cy.get('[data-cy=outlineStar]').click()
    cy.get('[data-cy=fillStar]').should('exist')
    cy.get('[data-cy=fillStar]').click()
    cy.get('[data-cy=outlineStar]').should('exist')
  })
  
})