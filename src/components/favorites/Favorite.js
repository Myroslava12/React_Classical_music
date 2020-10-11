import React, { useState } from "react";
import { getVideoFromYoutube } from "../../services/api";
import Video from "../works/Video";
import Loading from "../loading/Loading";

const Favorite = ({work}) => {
    const [show, setShow] = useState(false);
    const [videoKey, setVideoKey] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const showFavoriteVideoFromYoutube = async () => {
        setIsLoading(true);
        const video = await getVideoFromYoutube(work.name, work.title);
        setIsLoading(false);
        if (!video) {
            return;
        }
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
                <p className="favorite--composer--name">{work.name}</p>
                <p className="favorite--work--title">{work.title}</p>
                <div className="box--loading">{isLoading && <Loading />}</div>
                <button onClick={showFavoriteVideoFromYoutube} className="favorite--btn">Listen work</button>
            </div>
            {show && <Video videoKey={videoKey} setShow={setShow} />}
        </div>
    )
}

export default Favorite;