import logo from './logo.svg';
import './App.css';
import Publikus from './components/Publikus';
import Urlap from './components/Urlap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Szakdolgozatok</h3>
      </header>
      <nav className='navbar navbar-expand-lg'>
        <ul>
          <li>
            <a href="">Admin oldal</a>
          </li>
        </ul>
      </nav>
      <article>

        <div id='publikus'>

          < Publikus/>


        </div>
        <div id='urlap'>
          < Urlap/>


        </div>


      </article>
    </div>
  );
}

export default App;
