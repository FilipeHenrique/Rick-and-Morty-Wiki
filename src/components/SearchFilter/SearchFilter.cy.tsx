import Character from '@/types/character'
import React, { Dispatch, SetStateAction } from 'react'
import SearchFilter from './SearchFilter'

interface ISearchFilter {
  setData: Dispatch<SetStateAction<Character[]>>,
  action: Function, 
  refetch: Function
}

function setData(...args: any[]) {
  return 'ran';
}


describe('<SearchFilter />', () => {
  it('renders', () => {
    cy.mount(<SearchFilter setData={setData} action={()=>{}} refetch={()=>{}} />)
  })

  it('types',() => {
    cy.mount(<SearchFilter setData={setData} action={()=>{}} refetch={()=>{}} />)
    cy.get('[data-cy="input"]').type('rick')
  })

})

