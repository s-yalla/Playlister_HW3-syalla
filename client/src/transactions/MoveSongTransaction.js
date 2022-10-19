import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveSongTransaction extends jsTPS_Transaction {
    constructor(initApp, initOldSongIndex, initNewSongIndex) {
        super();
        this.store = initApp;
        this.oldSongIndex = initOldSongIndex;
        this.newSongIndex = initNewSongIndex;
    }

    doTransaction() {
        this.store.moveSong(this.store.oldSongIndex, this.store.newSongIndex);
    }
    
    undoTransaction() {
        this.store.moveSong(this.store.newSongIndex, this.store.oldSongIndex);
    }
}