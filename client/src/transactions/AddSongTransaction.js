import jsTPS_Transaction from "../common/jsTPS.js"
/**
 *
 * 
 * 
 * @author McKilla Gorilla
 * @author Sadashiva Yalla
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(store) {
        super();
        this.store = store;
    }

    doTransaction() {
        this.store.addSong();
    }
    
    undoTransaction() {
        this.store.currentList.songs.pop();
        this.store.addSongUpdate();
    }
}