import React from 'react'
import CharacterSkeleton from './CharacterSkeleton'

describe('<CharacterSkeleton />', () => {
  it('renders', () => {
    cy.mount(<CharacterSkeleton />)
  })
})