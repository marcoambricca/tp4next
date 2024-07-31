'use client'

import '../styles/booking.css';
import { useState } from "react";
import Form from '../components/form.jsx';
import List from '../components/list.jsx';
import Modal from '../components/modal.jsx';

export default function Booking(){
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
    <div className="booking"> 
      <Form handleAddCita={handleAddCita}/>
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