import { useState } from "react";

export const useCitas = () => {
  const [arrayCitas, setArrayCitas] = useState([]);
  const [citaAEliminar, setCitaAEliminar] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleAddCita = (cita) => {
    setArrayCitas([...arrayCitas, cita]);
  }

  const deleteCita = (target) => {
    setCitaAEliminar(target);
    setShowModal(true);
  };

  const handleDelete = (target) => {
    let mascotName = target.target.id
    const updatedArray = arrayCitas.filter(cita => cita.mascotName !== mascotName);
    setArrayCitas(updatedArray);
    setShowModal(false);
  }

  return {
    arrayCitas,
    handleAddCita,
    deleteCita,
    handleDelete,
    showModal,
    setShowModal
  };
};
