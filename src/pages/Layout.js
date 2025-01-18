//A BrowserRouter, Routes és Outlet segítségével egyszerűen létrehozhatók oldalak közötti navigációk.
//=A Link komponens lehetővé teszi az újratöltés nélküli navigációt, ami gyorsabb és jobb felhasználói 
// élményt nyújt.

//{/* Az alkalmazás fő elrendezését (pl. navigációs sáv, fejléc, lábléc) kezeli.

import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-dark ">
        <div className='container'>
        <Link className='navbar-brand text-light' to='/'> 
                Szakdolgozatok
            </Link>

            <ul className='navbar-nav'>
            <Link className='nav-link text-light' to='/'> {/*Az "/" URL a publikus tartalomra mutat.*/}
                Publikus tartalom
            </Link>

            <Link className='nav-link text-light' to='/admin'> {/*A "/admin" URL az admin tartalomra mutat.*/}
                Admin felület
            </Link>
            </ul>

        </div>
    </nav>
                  {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}

    <Outlet/>


    </>
  )
}


export default Layout
