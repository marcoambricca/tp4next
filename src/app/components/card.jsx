export default function Card(props){
    return(
        <div className="card">
            <span className="card-span">Mascota: {props.mascotName}</span>
            <span className="card-span">Dueño: {props.ownerName}</span>
            <span className="card-span">Fecha: {props.matchDate}</span>
            <span className="card-span">Hora: {props.matchTime}</span>
            <span className="card-span">Sintomas: {props.sintomas}</span>
            <button onClick={props.onDeleteCita()} className="btn delete-btn" id={props.mascotName}>Eliminar</button>
        </div>
    )
}