import React from 'react'
import Paginator from './Paginator'

describe('<Paginator />', () => {

  it('renders', () => {
    cy.mount(<Paginator pagesNumber={42} page={1} setPage={function (value: React.SetStateAction<number>): void {
    } } />)
  })

  it('should skip pages', () => {
    cy.mount(<Paginator pagesNumber={42} page={1} setPage={function (value: React.SetStateAction<number>): void {
    } } />)
    cy.get('[data-cy=skipright]').click()
    cy.get('[data-cy=pagebutton]').last().contains(12)
    cy.get('[data-cy=skipleft]').click()
    cy.get('[data-cy=pagebutton]').first().contains(1)
  })

})