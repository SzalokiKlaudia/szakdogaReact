import { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const AdatContext = createContext("");

export const AdatProvider = ({ children }) => {
  const [ lista, setLista ] = useState([]);

  const getLista = async (vegpont, callBack) => {
    //végpontról adatokat kérünk le

    try {
      const { data } = await axios.get(vegpont);
      callBack(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //post kérés

  const postData = async ({ ...adat }, vegpont) => {
    //adatokat küldönk a végpontnak

    try {
      await axios.post(vegpont, adat);
      getLista("api/szakdogak", setLista); //újra lekéri az adatokat és frissíti őket post után
    } catch (error) {
      //ha hálózati hiba van
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    //törlés id alapján
    try {
      const response = await axios.delete(`/${id}`);
      setLista((prevData) => prevData.filter((elem) => elem.id !== id));
      alert("Szakdoga törölve");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLista("api/szakdogak", setLista);
  }, []);

  return (
    <AdatContext.Provider value={{ lista, setLista, postData, deleteData }}>
      {children}
    </AdatContext.Provider>
  );
};
