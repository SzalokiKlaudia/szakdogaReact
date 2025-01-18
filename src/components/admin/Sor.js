import React, { useContext, useState } from 'react'
import { AdatContext } from '../../context/AdatContext'

export default function Sor(props) {

  const {deleteData, modifyData} = useContext(AdatContext)
  const [isEditing, setIsEditing] = useState(false) //kezeli a módosítás állapotát

  const [title, setTitle] = useState(props.elem.szakdoga_nev)
  const [link1, setLink1] = useState(props.elem.githublink)
  const [link2, setLink2] = useState(props.elem.oldallink)
  const [author, setAuthor] = useState(props.elem.tagokneve)

   //egy eseménykezelő függvényt definiál, amely akkor hívódik meg, amikor
    //  a felhasználó módosítja egy input mezőben.
    const handleTitleChange = (event) => setTitle(event.target.value)
  //(e): Az (e) egy paraméter, ami az eseményt (event) képviseli. Ez egy automatikusan átadott objektum, amely tartalmazza az eseménnyel kapcsolatos információkat. Például, amikor 
    // egy input mezőt módosítanak, az e objektum tartalmazza az új input értékét
    const handleLink1Change = (event) => setLink1(event.target.value)

    const handleLink2Change = (event) => setLink2(event.target.value)//input mező

    const handleAuthorChange = (event) => setAuthor(event.target.value)

    //mentés

        const klikkMentes = async () => {
          // Az objektumban az értékek azok amelyet a felhasználó input mezőkben adott meg.
        // összegyűjtjük azokat az adatokat, amelyek módosultak, és készen állunk arra, hogy elküldjük őket az adatbázisnak.
          const ujAdataok = { title, link1, link2, author };
        
          try {
            await modifyData(props.elem.id, ujAdataok);         //Frissítés API-n keresztül: A modifyData függvény hívásával elküldjük a módosított adatokat a backendnek, hogy ott frissüljön az elem

            setIsEditing(false); // Kilépünk a szerkesztési módból
          } catch (error) {
            console.error("Hiba a frissítés során:", error);
          }
        };

    

  return (
    <tr>
      
    <td>
      {isEditing ? (
        <input
        type='text' 
        value={title} 
        onChange={handleTitleChange} >
        </input>

      ) : (
        <span>
          {title}
        </span>
      )}
    
    </td>

    <td>
        {isEditing ? (
          <input
            type='text'
            value={link1}
            onChange={handleLink1Change}
          />
        ) : (
          <span>{link1}</span>
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            type='text'
            value={link2}
            onChange={handleLink2Change}
          />
        ) : (
          <span>{link2}</span>
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            type='text'
            value={author}
            onChange={handleAuthorChange}
          />
        ) : (
          <span>{author}</span>
        )}
      </td>

      <td>
        <button className='btn btn-outline-danger'
          onClick={isEditing ? klikkMentes : () => setIsEditing(true)}>
          {isEditing ? "Mentés" : "Módosítás"}
        </button>
        <button className='btn btn-outline-primary' onClick={() => deleteData(props.elem.id)}>Töröl</button>
      </td>
    </tr>
  )
}
