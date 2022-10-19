import Delete_Song_Modal from "./Delete_Song_Modal";
import EditToolbar from "./EditToolbar";
/*
    Our Application's Banner, note we are using function-style
    React. Our banner just has a left-aligned heading and a
    right-aligned toolbar for undo/redo and close list buttons.
    
    @author McKilla Gorilla
*/
function Banner(props) {
    return ( 
        <div>

            <Delete_Song_Modal/>  
        <div id="playlister-banner">
            Playlister
            <EditToolbar />
        </div>
        </div> 

    
        

    );
}

export default Banner;