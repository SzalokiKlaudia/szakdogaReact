
import React from 'react'

export default function Sor(props) {
  return (
    <tr>
      
    <td>{props.elem.szakdoga_nev}</td>
    <td>{props.elem.githublink}</td>
    <td>{props.elem.oldallink}</td>
    <td>{props.elem.tagokneve} </td>
    <td>
        <button className='btn btn-outline-danger'>Módosít</button>
        <button className='btn btn-outline-primary'>Töröl</button>


    </td>
  
    </tr>
  )
}
