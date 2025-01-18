

import React, { useContext } from 'react'

import { AdatContext } from '../../context/AdatContext'

export default function 
() {
    const {getLista, setLista, postData} = useContext(AdatContext)

    const handleSubmit = async (event) => {
        event.preventDefault()  // Megakadályozza az alapértelmezett form küldést

        // Adatok gyűjtése a form mezőkből
        const data = {
            szakdoga_nev: event.target.szakdoga_nev.value,
            githublink: event.target.githublink.value,
            oldallink: event.target.oldallink.value,
            tagokneve: event.target.tagokneve.value,

        }

         // Ellenőrzés üres mezőkre, hogy megszorítást adjunk nekik
         if(!data.szakdoga_nev || !data.githublink || !data.oldallink || !data.tagokneve) {
            alert("Minden mezőt ki kell tölteni!!")
            return
         }

         try {
            await postData("/api/szakdogak", data) //meghívtuk a fv átadtuk a végpntot és adatot amit fel akarunk tenni
            alert("Sikeres post hozzáadás!")
            event.target.reset()  // Űrlap alaphelyzetbe állítása

            getLista("/api/szakdogak",setLista) //frissítjük az adatokat az újakkal

         } catch(error) {
            alert("Hiba történt a post hozzáadásánál")
         }

    }

  return (
    <div className='container w-50 d-flex justify-content-center'>
        <form className='row' onSubmit={handleSubmit}>
            <div className='form-group row mb-3'>
                <label htmlFor="szakdoga_nev" className='col-sm-12'>
                    Szakdolgozat neve
                </label>
                <div className='col-sm-12'>
                    <input type="text" 
                    className='form-control'
                    id='szakdoga_nev'
                    />

                </div>

            </div>

            <div className='form-group row mb-3'>
                <label htmlFor="githublink" className='col-sm-12'>
                    Github link
                </label>
                <div className='col-sm-12'>
                    <input type="text" 
                    className='form-control'
                    id='githublink'

                    />

                </div>

            </div>

            <div className='form-group row mb-3'>
                <label htmlFor="oldallink" className='col-sm-12'>
                    Oldal link neve
                </label>
                <div className='col-sm-12'>
                    <input type="text" 
                    className='form-control'
                    id='oldallink'
                    />

                </div>

            </div>

            <div className='form-group row mb-3'>
                <label htmlFor="tagokneve" className='col-sm-12'>
                    Tagok neve
                </label>
                <div className='col-sm-12'>
                    <input type="text" 
                    className='form-control'
                    id='tagokneve'
                    />

                </div>

            </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-25">
                    Küld
            </button>
            </div>


        </form>
    </div>

 
  )
}
