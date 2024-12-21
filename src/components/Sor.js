import React from 'react'

function Sor(props) {
  return (
    <tr>
      
    <td>{props.adat.szakdoga_nev}</td>
    <td>{props.adat.githublink}</td>
    <td>{props.adat.oldallink}</td>
    <td>{props.adat.tagokneve} </td>
    <td>
        <button className='btn btn-outline-danger'>Módosít</button>
        <button className='btn btn-outline-primary'>Töröl</button>


    </td>
   
  
   
  
    </tr>


  )
}

export default Sor
