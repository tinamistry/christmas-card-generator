import ChooseImage from "./ChooseImage";
import UploadPicture from "./UploadPicture";
import { Icon, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";


function Editor({onSelectedImage, onUploadedImage}){

    const [currentStep, setCurrentStep] = useState(1)
    const [step1, setStep1] = useState(true)
    const [step2, setStep2 ] = useState(false)


    function previousStep(){
       if (currentStep == 2){
            setCurrentStep(1);
            setStep1(true);
            setStep2(false);
       }
        

    }

    function nextStep(){
        if (currentStep == 1){
            setCurrentStep(2);
            setStep1(false);
            setStep2(true);
       }
    }


    return (
        <div className = "editor"> 
             <div className="navigation">
                        <IconButton onClick = {previousStep}>
                            <ArrowBackIosIcon/>
                        </IconButton>
                        <IconButton onClick = {nextStep}>
                            <ArrowForwardIosIcon/>
                        </IconButton>
                </div>
        
            <div className = "options">
              
                <div>
                   {step1 && <ChooseImage onSelectedImage = {onSelectedImage} />}
        
                </div>
               
                <div>
                    {step2 && <UploadPicture onUploadedImage = {onUploadedImage}/>}
                </div>
               
     
            
            
            </div>

        
        </div>
    )
}

export default Editor; 