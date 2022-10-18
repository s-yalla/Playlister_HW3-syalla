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
        store.deleteList();
        store.CloseDelete_ListModal();
    }
    function handleListDeletionReverse() {
        store.CloseDelete_ListModal();
    }
    
    return (
        <div 
            class="modal" 
            id="delete-list-modal" 
            data-animation="slideInOutLeft">
                <div class="modal-root" id='verify-delete-list-root'>
                    <div class="modal-north">
                        Delete playlist?
                    </div>
                    <div class="modal-center">
                        <div class="modal-center-content">
                            Are you sure you wish to permanently delete the  playlist?
                        </div>
                    </div>
                    <div class="modal-south">
                        <input type="button" 
                            id="delete-list-confirm-button" 
                            class="modal-button" 
                            onClick={handleListDeletion}
                            value='Confirm' />
                        <input type="button" 
                            id="delete-list-cancel-button" 
                            class="modal-button" 
                            onClick={handleListDeletionReverse}
                            value='Cancel' />
                    </div>
                </div>
        </div>
    );
}
export default Delete_List_Modal;