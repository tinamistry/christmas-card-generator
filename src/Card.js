

function Card({image}){

    return(
        <div className = "card">
            <div className = "view">
            {image ? (
                <img src={image} alt="Selected Template" className="card-image" />
                ) : (
                <p>Please select a template</p>
                )}
            </div>
        </div>
    )
}

export default Card; 