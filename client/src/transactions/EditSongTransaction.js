import jsTPS_Transaction from "../common/jsTPS.js"
/*
 * @author McKilla Gorilla
 * @author Sadashiva Yalla
 */
 export default class EditSongTransaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, newSongObj, OldSOngOBj) {
        super();
        this.app = initApp;
        this.songIndex = initIndex;
        this.newSong = newSongObj;
        this.prevSong = OldSOngOBj;
    }

    doTransaction() {
        this.store.editSong(this.newSong, this.songIndex);
    }
    
    undoTransaction() {
        this.store.editSong(this.prevSong, this.songIndex);
    }
}