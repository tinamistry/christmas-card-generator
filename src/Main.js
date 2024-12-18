import Editor from "./Editor";
import Card from "./Card";
import { useState } from "react";

function Main(){

    const [selectedImage, setSelectedImage] = useState('./templates/Option1.jpg')

    const handleSelectImage = (image) => {
        setSelectedImage(image);  // Update the selected image
      };

    return(
        <div className = "main">
            <p>Christmas Card Generator</p>

            <div className = "content">
                    <Editor onSelectedImage = {handleSelectImage}></Editor>
                    <Card image={selectedImage}></Card>
            </div>

        </div>
    )
}

export default Main; 