import React from "react";
import ReactPlayer from 'react-player/youtube';

const Video = ({videoKey, setShow, myRef, myFavRef}) => {

    const onClick = () => setShow(false);

    return (
        <div className="work--video" ref={myRef}>
            <div className="work--video--hide"><i className="fa fa-times" onClick={onClick}></i></div>
            <div className="video--player" ref={myFavRef}>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoKey}`}
                    width='100%'
                    height='100%'
                    controls
                    playing
                />
            </div>
        </div>
    )
}

export default Video;