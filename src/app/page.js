'use client'

import { useState } from "react";
import List from "./components/list.jsx";
import Modal from "./components/modal.jsx";
import './styles/index.css';

export default function Home() {
  const [arrayCitas, setArrayCitas] = useState([]);
  
  const handleAddCita = (cita) => {
    setArrayCitas([...arrayCitas, cita]);
  }

  const [citaAEliminar, setCitaAEliminar] = useState();
  const [showModal, setShowModal] = useState(false);

  const deleteCita = (target) => {
    setCitaAEliminar(target);
    setShowModal(true);
  };

  const handleDelete = (target) =>{
    let mascotName = target.target.id
    const updatedArray = arrayCitas.filter(cita => cita.mascotName !== mascotName);
    setArrayCitas(updatedArray);
    setShowModal(false);
  }

  return (
    <div className="App"> 
      <List arrayCitas={arrayCitas} onDeleteCita={deleteCita}/>
      {showModal && <Modal heading={'¿Desea eliminar esta cita?'} setter={(value) => {
            if (value) {
              handleDelete(citaAEliminar); 
            }
            setShowModal(false); 
          }}
          isOpen={setShowModal}
      />}
    </div>
  );
}