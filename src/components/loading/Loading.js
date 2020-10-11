import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './1918-loading-and-done.json';

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    }

    return (
        <div className="loader--container">
            <div className="loader--box">
                <Lottie  options={defaultOptions} />
            </div>
        </div>
    )
}

export default Loading;