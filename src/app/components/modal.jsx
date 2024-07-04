const Modal = (props) => {
    return(
        <div className='modal'>
            <h1>{props.heading}</h1>
            <div>
                <button className='btn btn-modal-cancel' onClick={() => {props.setter(false)}}>Cancelar</button>
                <button className='btn btn-modal-ok' onClick={() => {props.setter(true)}}>Borrar cita</button>
            </div>
            
        </div>
    )
}

export default Modal;