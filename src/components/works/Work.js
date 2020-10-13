import React, { useRef, useState} from 'react';
import Video from "./Video";
import {getVideoFromYoutube} from "../../services/api";
import { getFavoritesFromLocalStorage, setFavoritesToLocalStorage } from "../../services/favorites";
import Loading from '../loading/Loading';
import { scrollToRef } from "../../services/scroll";

const Work = ({work, composerName, composerImg}) => {
    const [videoKey, setVideoKey] = useState('');
    const [show, setShow] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [videoNotFound, setVideoNotFound] = useState(false);

    const myRef = useRef();
    const myRefNotFound = useRef();

    const showVideoFromYoutube = async () => {
        setIsLoading(true);
        const video = await getVideoFromYoutube(composerName, work.title);
        setIsLoading(false);
        if (!video) {
            setVideoNotFound(true);
            scrollToRef(myRefNotFound);
            return;
        }
        setVideoKey('');
        setVideoKey(video.id.videoId);
        setShow(true);
        setVideoNotFound(false);
        scrollToRef(myRef);
    }

    const addToFavorites = () => {
        const newFavorites = [...getFavoritesFromLocalStorage(), {...work, name: composerName, img: composerImg}];
        if (isAdded) {
            const filteredFavorites = newFavorites.filter(el => el.id !== work.id);
            setFavoritesToLocalStorage(filteredFavorites);
            setIsAdded(false);
            return;
        }
        setFavoritesToLocalStorage(newFavorites);
        setIsAdded(!isAdded);
    }

    return (
        <li className="work--box">
            <p onClick={showVideoFromYoutube} className="work--title">{work.title}</p>
            <div className="work--icons">
                <button onClick={addToFavorites} className="btn--add--work">{!isAdded ? <i className="fa fa-heart"></i> : <i className="fa fa-check"></i>}</button>
                <button onClick={showVideoFromYoutube} className="btn--yt--player">{isLoading && <Loading />}<i className="fa fa-youtube"></i></button>
            </div>
            {videoNotFound && <p ref={myRefNotFound} className="work--not--found">Video not found</p>}
            {show && <Video videoKey={videoKey} setShow={setShow} myRef={myRef} />}
        </li>
    )
}

export default Work; 