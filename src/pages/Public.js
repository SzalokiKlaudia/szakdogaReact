
import React, { useContext } from 'react'
import { AdatContext } from '../context/AdatContext'
import Tablazat from '../components/public/Tablazat'

function Public() {
  const {lista} = useContext(AdatContext)
  return (
    <main>
      
        {lista ? < Tablazat lista = {lista} /> : 'Nincs adat'}
    {/* ez egy feltételes renderelés ami a listát adja át a komponensnek*/}


      
    </main>
  )
}

export default Public
