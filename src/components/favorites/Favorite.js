import React, { useState } from "react";
import { getVideoFromYoutube } from "../../services/api";
import Video from "../works/Video";

const Favorite = ({work}) => {
    const [show, setShow] = useState(false);
    const [videoKey, setVideoKey] = useState('');

    const showFavoriteVideoFromYoutube = async () => {
        const video = await getVideoFromYoutube(work.name, work.title);
        setVideoKey(video.id.videoId);
        setShow(true);
    }
    return (
        <div className="favorite--work--box" key={work.id}>
            <div className="img--box">
                <div className="composer--img">
                    <img src={work.img}></img>
                </div>
                <div className="favorite--logo">
                    <p className="favorite--logo--title">ClassicalApp</p>
                    <span className="player--logo player--1"></span>
                    <span className="player--logo player--2"></span>
                    <span className="player--logo player--3"></span>
                    <span className="player--logo player--4"></span>
                    <span className="player--logo player--1"></span>
                    <span className="player--logo player--2"></span>
                    <span className="player--logo player--3"></span>
                    <span className="player--logo player--4"></span>
                    <span className="player--logo player--1"></span>
                    <span className="player--logo player--2"></span>
                    <span className="player--logo player--3"></span>
                </div>
            </div>
            <div className="favorite--composer--info">
                <h2 className="favorite--composer--name">{work.name}</h2>
                <h3 className="favorite--work--title">{work.title}</h3>
                <button onClick={showFavoriteVideoFromYoutube} className="favorite--btn">Listen work</button>
            </div>
            {show && <Video videoKey={videoKey} setShow={setShow} />}
        </div>
    )
}

export default Favorite;