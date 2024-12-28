

function Card({image, imageUploaded}){
    console.log("Base image:", image);
    console.log("Uploaded image:", imageUploaded);
    const uploadedImageURL = imageUploaded 
    ? URL.createObjectURL(imageUploaded)
    : null;

    return(
   
        <div className="card">
            <div className="view">
                {image && (
                    <img src={image} alt="Selected Template" className="card-image" />
                )}
                {imageUploaded && (
                    <img src={uploadedImageURL} alt="Uploaded Image" className="uploaded-image" />
                )}
                {!image && !uploadedImageURL && <p>Please select a template</p>}
            </div>
    </div>
    )
}

export default Card; 