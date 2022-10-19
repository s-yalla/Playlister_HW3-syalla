import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
/*
    This toolbar is a functional React component that
    manages the delete list modal.
    
    @author Sadashiva Yalla
*/
function Delete_Song_Modal() {
    const { store } = useContext(GlobalStoreContext);
    


    // here add the equivalent of render in HW2
    function handleListDeletion(varProp) {
        varProp.stopPropagation();
        store.deleteList(store.markListForDeletionId)
        store.CloseDelete_SongModal()
    }
    function handleListDeletionReverse() {
        store.CloseDelete_SongModal()
    }
    
    return (
        <div
            id="remove-song-modal"
            className="modal"
            data-animation="slideInOutLeft">
            <div className="modal-root" id='verify-remove-song-root'>
                <div className="modal-north">
                    Remove ?
                </div>
                <div className="modal-center">
                    <div className="modal-center-content">
                        Are you sure you wish to permanently remove  from the playlist?
                    </div>
                </div>
                <div className="modal-south">
                    <input type="button" id="remove-song-confirm-button" className="modal-button" onClick={handleListDeletion} value='Confirm' />
                    <input type="button" id="remove-song-cancel-button" className="modal-button" onClick={handleListDeletionReverse} value='Cancel' />
                </div>
            </div>
        </div>
    );
}
export default Delete_Song_Modal;