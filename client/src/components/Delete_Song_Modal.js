import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
/*
    This toolbar is a functional React component that
    manages the delete list modal.
    
    @author Sadashiva Yalla
*/
function Delete_List_Modal() {
    const { store } = useContext(GlobalStoreContext);
    


    // here add the equivalent of render in HW2
    function handleListDeletion(varProp) {
        varProp.stopPropagation();
        store.deleteList(store.markListForDeletionId)
        store.closeDeleteListModal()
    }
    function handleListDeletionReverse() {
        store.closeDeleteListModal()
    }
    
    return (
        <div
            id="remove-song-modal"
            className="modal"
            data-animation="slideInOutLeft">
            <div className="modal-root" id='verify-remove-song-root'>
                <div className="modal-north">
                    Remove {name}?
                </div>
                <div className="modal-center">
                    <div className="modal-center-content">
                        Are you sure you wish to permanently remove {name} from the playlist?
                    </div>
                </div>
                <div className="modal-south">
                    <input type="button" id="remove-song-confirm-button" className="modal-button" onClick={handleDeleteSong} value='Confirm' />
                    <input type="button" id="remove-song-cancel-button" className="modal-button" onClick={handleCancelDeleteSong} value='Cancel' />
                </div>
            </div>
        </div>
    );
}
export default Delete_Song_Modal;