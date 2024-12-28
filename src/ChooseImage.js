import './Editor.css'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Option1 from './templates/Option1.jpg';
import Option2 from './templates/Option2.jpg';
import Option3 from './templates/Option3.jpg';
import Option4 from './templates/Option4.jpg';
import chooseTemplate from './templates/chooseTemplate.png'



function ChooseImage({onSelectedImage}){


 
    return(
        <div className = "stepone">
             <img src={chooseTemplate} alt="Choose a Template" className="title-image" />
            <div className = "templateOptions">
    
            <Card className = "option" onClick={() => onSelectedImage(Option1)}>
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option1}
                    title="Option 1"
                  
                
                />
            
             </Card>

             <Card className = "option" onClick={() => onSelectedImage(Option2)}>
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option2}
                    title="Option 2"
                />
            
             </Card>

             <Card className = "option" onClick={() => onSelectedImage(Option3) }>
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option3}
                    title="Option 3"
                />
            
             </Card>

             <Card className = "option" onClick={() => onSelectedImage(Option4)}>
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option4}
                    title="Option 4"
                />
             </Card>
           </div>
        </div>
    )

}

export default ChooseImage; 