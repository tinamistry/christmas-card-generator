import Editor from "./Editor";
import Card from "./Card";

function Main(){

    return(
        <div className = "main">
            <p>Christmas Card Generator</p>

            <div className = "content">
                    <Editor></Editor>
                    <Card></Card>
            </div>

        </div>
    )
}

export default Main; 