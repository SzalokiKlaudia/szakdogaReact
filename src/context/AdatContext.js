import { createContext, useEffect, useState } from "react";
import { myaxios } from "./axios";

export const AdatContext = createContext("");

export const AdatProvider = ({ children }) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //egyik megoldás a get kérésre
  /* const getLista = async (vegpont, callBack) => {
    //végpontról adatokat kérünk le

    try {
      const { data } = await axios.get(vegpont);
      callBack(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };*/

  //másik megoldás
  function getLista(vegpont, fv) {
    // itt kéri le az adatokat egy adott végpontból.(alapértelmezett útv, és állapotfrissíró fgv)

    //  Betöltési Állapot Indítása
    setLoading(true);
    setError(null);

    myaxios
      .get(vegpont) // Elküldi a GET-kérést a megadott API végpontra amit az axiosban van

      //  Sikeres Válasz Kezelése Promise-kezelés,
      .then(function (response) {
        // .then(): Kezeli a sikeres válaszokat, ha kérés sikeres a response.data tartalmazza a kapott adatokat

        fv(response.data); // response.data: Az API válaszában kapott adatok.
        // fv(response.data): Meghívja a callback függvényt (fv), amely az adatokat feldolgozza, beállítja setteli
      })

      // Hiba Kezelése
      .catch(function (error) {
        console.log(error);
        setError("Hiba történt az adatok lekérésekor");
      })

      //Betöltési Állapot Vége
      .finally(function () {
        // Mindig lefut, függetlenül attól, hogy a kérés sikeres volt-e vagy sem.
        setLoading(false);
      });
  }

  //post kérés kezelése

  const postData = async (vegpont, data) => {
    //  Betöltési Állapot Indítása
    setLoading(true); // jelzi, hogy az alkalmazás most éppen egy aszinkron műveletet hajt végre, POST jelenleg
    setError(null); // Ha volt valamilyen hiba, ezt most nullára állítjuk, hogy a felhasználó ne lásson régi hibákat.

    //Ha bármilyen hiba történik a try blokkban, a vezérlés átkerül a catch blokkba, és nem áll le a program.
    try {
      // await biztosítja h a következő kód ne fusson le amíg a kérés választ nem kapott
      const response = await myaxios.post(vegpont, data); //Itt történik a tényleges HTTP POST kérés hívással, a végpontra, kuldi az adatot
      console.log("Sikeresen elküldött adat: ", response.data); //sikeres válaszból származó adat a response.data
      // Az Axios egy Promise-ot ad vissza
      // Az új adat hozzáadása az állapothoz
      //az új elem meg is jelenik
      setLista((prevData) => [...prevData, response.data]); //setLista: Az új adat hozzáadása a lista állapothoz.
      // A korábbi adatok (prevData) megőrzése érdekében az új adatokat hozzáfűzi a meglévő listához.
    } catch (error) {
      //ha kérés során hiba történik ide lép be
      setError("Hiba történt az adatok elküldésekor");
    } finally {
      setLoading(false); //Ezzel biztosítjuk, hogy a "betöltés" állapot végül mindig leáll, akkor is, ha hibás kérés történt,
    }
  };

  // adat törlése

  const deleteData = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await myaxios.delete(`/api/szakdogak/${id}`); //az az url ami a backend-ben is beállítottál a delete-nek
      console.log(response.data);

      // Frissítjük az adatokat, eltávolítjuk a törölt könyvet
      //A !== operátor azt jelenti, hogy csak azok az elemek maradnak meg az új tömbben, amelyek
      // id-ja nem egyenlő a törölt id-jával (amit a deleteData függvény paramétereként kapott meg).
      setLista((prevData) => prevData.filter((elem) => elem.id !== id));
      alert("Sikeresen törölve!");
    } catch (error) {
      setError("Hiba történt az adat elküldésekor!");
    } finally {
      setLoading(false);
    }
  };

  //módosít
  const modifyData = async (id, ujAdataok) => {
    setLoading(true);
    setError(null);
    console.log(ujAdataok, id, `/api/szakdogak/${id}`);
    
    try {
      const response = await myaxios.put(`/api/szakdogak/${id}`, ujAdataok);
      console.log("Backend válasza:", response.data); // Ellenőrizzük a választ

      const updatedRecord = response.data.data;
      console.log("Módosított rekord:", updatedRecord); // Az adatok, amiket vártunk

      setLista((prevData) => {
        return prevData.map((elem) => {
          if (elem.id === id) {
            // Frissített rekord beillesztése
            return { ...elem, ...updatedRecord }; // Frissített adatok
          }
          return elem;
        });
      });

      alert("Sikeres módosítás!");
    } catch (error) {
      console.error("Hiba:", error);
      setError("Hiba történt");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLista("api/szakdogak", setLista);
  }, []);

  return (
    <AdatContext.Provider
      value={{ lista, setLista, postData, getLista, deleteData, modifyData }}
    >
      {children}
    </AdatContext.Provider>
  );
};
