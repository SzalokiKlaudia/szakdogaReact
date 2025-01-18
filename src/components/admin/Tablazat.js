
import React, { useContext } from 'react'
import { AdatContext } from '../../context/AdatContext'
import Sor from './Sor'

export default function Tablazat() {
  const {lista} = useContext(AdatContext)
  return (
      <div className="d-flex justify-content-center">
        <table className='table table-stripped mt-5 w-75'>
            <thead className='table-dark'>
            <tr>
                    <th>Szakdolgozat név</th>
                    <th>Github link</th>
                    <th>Oldal link</th>
                    <th>Tagok neve</th>
                    <th></th>
    
            </tr>
    
            </thead>
            <tbody>
              {
                lista.map(elem => {
                  return < Sor elem={elem} key={elem.id} />
                })
              }
                
    
            </tbody>
    
    
        </table>
        </div>
  )
}
