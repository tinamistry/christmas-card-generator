import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

function renderPicture(fileName){
    console.log("fileName")
    
}


function UploadPicture({onUploadedImage}){

    function renderPicture(fileName){
        console.log("fileName")
        onUploadedImage(fileName)
        
    }

    
    return(
        <div>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
            Upload files
            <VisuallyHiddenInput
                type="file"
                onChange={(event) => renderPicture(event.target.files[0])}
                multiple
            />
            </Button>               
        </div>
    )
}

export default UploadPicture;