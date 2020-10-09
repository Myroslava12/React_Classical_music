import React, {useEffect, useState} from 'react';
import Video from "./Video";
import {getVideoFromYoutube} from "../../services/api";
import { getFavoritesFromLocalStorage, setFavoritesToLocalStorage } from "../../services/favorites";

const Work = ({work, composerName, composerImg}) => {
    const [videoKey, setVideoKey] = useState('');
    const [show, setShow] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const showVideoFromYoutube = async () => {
        const video = await getVideoFromYoutube(composerName, work.title);
        setVideoKey('');
        setVideoKey(video.id.videoId);
        setShow(true);
    }

    const addToFavorites = () => {
        const newFavorites = [...getFavoritesFromLocalStorage(), {...work, name: composerName, img: composerImg}];
        setFavoritesToLocalStorage(newFavorites);
        setIsAdded(true);
    }

    return (
        <li className="work--box">
            <h2 className="work--title">{work.title}</h2>
            <div className="work--icons">
                <button disabled={isAdded && true} onClick={addToFavorites} className="btn--add--work">{(isAdded === false) ? <i className="fa fa-heart"></i> : <i className="fa fa-check"></i>}</button>
                <button onClick={showVideoFromYoutube} className="btn--yt--player"><i className="fa fa-youtube"></i></button>
            </div>
            {show && <Video videoKey={videoKey} setShow={setShow} />}
        </li>
    )
}

export default Work; 