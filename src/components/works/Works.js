import React from 'react';
import Work from "./Work";

const Works = ({works, composerName, composerImg}) => {
    
    return (
        <div className="section--works">
            <ul className="list--works">
                {works.map(work => {
                    return <Work 
                        work={work} 
                        composerName={composerName} 
                        key={work.id}
                        composerImg={composerImg}
                    />
                })}
            </ul>
        </div>
    )
}

export default Works;