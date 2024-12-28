import Editor from "./Editor";
import Card from "./Card";
import { useState } from "react";
import title from './templates/title.png'

function Main(){

    const [selectedImage, setSelectedImage] = useState('/templates/Option1.jpg')
    const [uploadedImage, setUploadedImage] = useState('')



    const handleSelectImage = (image) => {
        setSelectedImage(image);  
      };

    const handleUploadedImage = (image) =>{
        setUploadedImage(image)
        console.log(image)
    }


    return(
        <div className = "main">
            <img src={title} alt="Christmas Card Generator" className="title-image" />
            <div className = "content">
                    <Editor onSelectedImage = {handleSelectImage} onUploadedImage = {handleUploadedImage} ></Editor>
                    <Card image={selectedImage} imageUploaded = {uploadedImage}></Card>
            </div>

        </div>
    )
}

export default Main; 