

import React, { useContext} from 'react'
import { AdatContext } from '../context/AdatContext'
import Sor from './Sor'

function Publikus() {

    const {lista} = useContext(AdatContext)
    console.log(lista)
  return (
    <>
    <div className='w-80'>
    <table className='table table-striped'>
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
            {lista.map((elem, index) => {
                return < Sor adat={elem} key={index} / >
            
            })}

        </tbody>



    </table>
    </div>
    </>
  )
}

export default Publikus
