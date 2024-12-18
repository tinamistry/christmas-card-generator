import './Editor.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Option1 from './templates/Option1.jpg';
import Option2 from './templates/Option2.jpg';
import Option3 from './templates/Option3.jpg';
import Option4 from './templates/Option4.jpg';



function ChooseImage(){


 
    return(
        <div className = "stepone">
            <div className = "templateOptions">
    
            <Card className = "option" >
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option1}
                    title="Option 1"
                
                />
            
             </Card>

             <Card className = "option" >
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option2}
                    title="Option 2"
                />
            
             </Card>

             <Card className = "option" >
                <CardMedia
                    sx={{ height: 370 }}
                    image={Option3}
                    title="Option 3"
                />
            
             </Card>

             <Card className = "option">
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