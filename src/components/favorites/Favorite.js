import React, { useEffect, useRef, useState } from "react";
import { getVideoFromYoutube } from "../../services/api";
import Video from "../works/Video";
import Loading from "../loading/Loading";
import { scrollToRef } from "../../services/scroll";
import AOS from 'aos';

const Favorite = ({work, onRemove}) => {
    const [show, setShow] = useState(false);
    const [videoKey, setVideoKey] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoNotFound, setVideoNotFound] = useState(false);

    const myFavRef = useRef();
    const myRefNotFound = useRef();

    useEffect(() => {
        AOS.init({
          duration : 500
        });
    }, []);

    const showFavoriteVideoFromYoutube = async () => {
        setIsLoading(true);
        const video = await getVideoFromYoutube(work.name, work.title);
        setIsLoading(false);

        if (!video) {
            setVideoNotFound(true);
            scrollToRef(myRefNotFound);
            return;
        }
        setVideoKey(video.id.videoId);
        setShow(true);
        scrollToRef(myFavRef);
    }

    return (
        <div className="favorite--work--box" key={work.id} data-aos="fade-up">
            <button onClick={onRemove} className="btn--favorite--delete" data-aos="flip-right"><i className="fa fa-trash" /></button>
            <div className="img--box">
                <div className="composer--img" data-aos="zoom-in">
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
            <div className="favorite--composer--info" data-aos="fade-up" data-aos-duration="1200">
                <p className="favorite--composer--name">{work.name}</p>
                <p className="favorite--work--title">{work.title}</p>
                <div className="box--loading">{isLoading && <Loading />}</div>
                <button onClick={showFavoriteVideoFromYoutube} className="favorite--btn">Listen work</button>
            </div>
            {videoNotFound && <p ref={myRefNotFound} className="work--not--found">Video not found</p>}
            {show && <Video videoKey={videoKey} setShow={setShow} myFavRef={myFavRef} />}
        </div>
    )
}

export default Favorite;