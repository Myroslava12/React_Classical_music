import React, {useEffect, useState} from 'react';
import Video from "./Video";
import {getVideoFromYoutube} from "../../services/api";
import { getFavoritesFromLocalStorage, setFavoritesToLocalStorage } from "../../services/favorites";
import Loading from '../loading/Loading';

const Work = ({work, composerName, composerImg}) => {
    const [videoKey, setVideoKey] = useState('');
    const [show, setShow] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const showVideoFromYoutube = async () => {
        setIsLoading(true);
        const video = await getVideoFromYoutube(composerName, work.title);
        setIsLoading(false);
        if (!video) {
            return;
        }
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
            <p className="work--title">{work.title}</p>
            <div className="work--icons">
                <button disabled={isAdded && true} onClick={addToFavorites} className="btn--add--work">{!isAdded ? <i className="fa fa-heart"></i> : <i className="fa fa-check"></i>}</button>
                <button onClick={showVideoFromYoutube} className="btn--yt--player">{isLoading && <Loading />}<i className="fa fa-youtube"></i></button>
            </div>
            {show && <Video videoKey={videoKey} setShow={setShow} />}
        </li>
    )
}

export default Work; 