import Card from './card.jsx'

const List = (props) => {
    return(
        <div className="list">
            {props.arrayCitas.map((e, index) => (
                <Card
                    key={index}
                    mascotName={e.mascotName} 
                    ownerName={e.ownerName} 
                    matchDate={e.matchDate} 
                    matchTime={e.matchTime} 
                    sintomas={e.sintomas} 
                    onDeleteCita={() => props.onDeleteCita}
                />
            ))}
        </div>
    )
}

export default List;