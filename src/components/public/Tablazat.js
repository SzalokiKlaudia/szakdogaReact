

import React from 'react'
import Sor from './Sor'

export default function Tablazat(props) {
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
        <tbody>{
            props.lista.map(elem => {

            return <Sor elem={elem} key={elem.id} />

        })}

        </tbody>


    </table>
    </div>
  )
}
