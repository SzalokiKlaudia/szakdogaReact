import React, { useContext } from 'react'
import { AdatContext } from '../context/AdatContext'

function Urlap() {

  const {postData, setLista, lista, getLista} = useContext(AdatContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const adat = {
      szakdoga_nev: event.target.title.value,
      tagokneve: event.target.author.value,
      oldallink: event.target.page.value,
      githublink: event.target.git.value
    }

    try {
      await postData( "api/szakdogak", adat)
      alert("Sikeres")
      event.target.reset()
      getLista("api/szakdogak", setLista)
    }catch (error){
      console.log(error)
    }

  }



  return (
    <form className='my-3' onSubmit={handleSubmit}>

    <div className='form-group row mb-3'>
                <label htmlFor="Szakdolgozat címe" className='col-sm-1 col-form-label'>
                Szakdolgozat címe
                </label>
                <div className='col-sm-11'>
                    <input type='text' 
                        className='form-control' 
                        id='title' 
                        value= {szakdoga_nev}
                    >
                
                    </input>
                </div>
    
    
    
            </div>
    
            <div className='form-group row mb-3'>
                <label htmlFor=" Készítő neve" className='col-sm-1 col-form-label'>
                Készítő neve
                </label>
                <div className='col-sm-11'>
                    <input type='text' 
                        className='form-control' 
                        id='author' 
                        value= {tagokneve}
                    >
                
                    </input>
                </div>
    
    
    
            </div>
    
            <div className='form-group row mb-3'>
                <label htmlFor="Az oldal elérhetősége" className='col-sm-1 col-form-label'>
                Az oldal elérhetősége
                </label>
                <div className='col-sm-11'>
                    <input type='text' 
                        className='form-control' 
                        id='page' 
                        value={oldallink}
                    >
                
                    </input>
                </div>
    
    
    
            </div>
    
            
            <div className='form-group row mb-3'>
                <label htmlFor="Github elérhetőség" className='col-sm-1 col-form-label'>
                Github elérhetősége
                </label>
                <div className='col-sm-11'>
                    <input type='text' 
                        className='form-control' 
                        id='git' 
                        value= {githublink}
                    >
                
                    </input>
                </div>
    
            </div>
            <button type='submit' className='btn btn-primary'>
                Küld
            </button>
  
    
        </form>
  )
}

export default Urlap
