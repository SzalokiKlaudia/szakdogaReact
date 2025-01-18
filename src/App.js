import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Public from './pages/Public';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Szakdolgozatok</h3>
      </header>

      <BrowserRouter> {/*Ez gondoskodik az URL-címek frissítéséről és figyeléséről.*
      A böngésző történetét kezeli, és lehetővé teszi a navigációt az alkalmazás különböző oldalai között.*/}

        <Routes> {/*összefogja az útvonalakat*/}

          <Route path='/' element= {< Layout/>} > {/* Az alkalmazás fő elrendezését (pl. navigációs sáv, fejléc, lábléc) kezeli.
                                                  ,itt a layout komponenst szeretnénk használni*/}
            <Route index element = {<Public />} /> {/* Ez az index útvonalat jelöli, ami azt jelenti, hogy ha csak a gyökér (/) URL-re navigálunk, a Public komponens jelenik meg. */}
            <Route path = 'admin' element= {<Admin />} /> {/* Ezzel hozunk létre egy aloldalt az adminisztrációs funkciók számára.*/}
            <Route path= '*' element= {< NoPage />}/> {/* Ez biztosítja, hogy ha a felhasználó helytelen URL-re navigál, akkor egy „404 - Oldal nem található” típusú hibaoldalt kapjon. mindig a végére kerüljön */}

          </Route>



        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
