import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

function SongCard(props) {
    const { store } = useContext(GlobalStoreContext);

    const { song, index } = props;

   

    const [draggedTo, setDraggedTo] = useState(0);

    function delSongHandler(event)
    {
        event.stopPropagation();
        //store.OpenDeleteSong_Modal(index);
    } 
    function topPull(event) {
        event.dataTransfer.setData("item", event.target.id);
    }

    function dragUp(event) {
        event.preventDefault();
    }

    function dragSecond(event) {
        event.preventDefault();
        setDraggedTo(true);
    }

    function dragdown(event) {
        event.preventDefault();
        setDraggedTo(false);
    }

    function dropdown(event) {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("item");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        setDraggedTo(false);        
    }

   
    

    return (
        <div
            key={index}
            id={'song-' + index + '-card'}
            onDragStart={topPull}
            onDragOver={dragUp}
            onDragEnter={dragSecond}
            onDragLeave={dragdown}
            onDrop={dropdown}
            draggable="true"
        >
            {index + 1}.
            <a
                id={'song-' + index + '-link'}
                className="song-link"
                href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                {song.title} by {song.artist}
            </a>
            <input
                type="button"
                id={"remove-song-" + index}
                className="list-card-button"
                value={"\u2715"}
                onClick={delSongHandler}
                
                
            />
        </div>
    );
}

export default SongCard;