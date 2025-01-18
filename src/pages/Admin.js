

import React from 'react'
import UjElem from '../components/admin/UjElem'
import {useContext} from "react"
import { AdatContext } from '../context/AdatContext'
import Tablazat from '../components/admin/Tablazat'

function Admin() {
  const {lista} = useContext(AdatContext)
  return (

    <main className='row g-5'>
      <section>
        < UjElem />
      </section>

      <article>
        {/* átadjuk a lista adatokat megjelenításre */}
        {lista ? < Tablazat lista = {lista}/> : 'Nincs adat' }

      </article>
    

    </main>
   
  )
}

export default Admin
