'use client'

import List from "./components/list.jsx";
import Modal from "./components/modal.jsx";
import { useCitas } from "./hooks/useCitas.js";
import './styles/index.css';

export default function Home(props) {
  const { arrayCitas, deleteCita, handleDelete, showModal, setShowModal } = useCitas();
  
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