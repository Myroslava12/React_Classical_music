import React, { useRef, useState } from "react";
import Works from "../works/Works";
import FormSearchWorks from "../works/FormSearchWorks";

const Composer = ({composer}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [works, setWorks] = useState([]);

    const onClick = () => setIsVisible(true);

    const myRef = useRef();

    return (
        <div className="box--composer">
            <div className="container--app">
                <div className="composer--container">
                    {isVisible && <div className="hide--section"></div>}
                    <div className="composer--info">
                        <h2 className="composer--name">{composer.name}</h2>
                        <span className="composer--birth">{composer.birth} - {composer.death}</span>
                        <p className="composer--epoch">The era in which he created: <strong>{composer.epoch}</strong></p>
                        <button onClick={onClick} className="composer--btn">Search works</button>
                    </div>
                    <div className="composer--bg-img"></div>
                    <div className="composer--portrait">
                        <img src={composer.img} />
                    </div>
                    {isVisible && <FormSearchWorks 
                            works={works}  
                            setIsVisible={setIsVisible} 
                            composerID={composer.id}
                            setWorks={setWorks}
                            composer={composer}
                            myRef={myRef}
                        />
                    }
                </div>
                {(works.length !== 0) && <Works 
                    works={works} 
                    composerName={composer.name} 
                    composerImg={composer.img} 
                    myRef={myRef}
                />}
            </div>
        </div>
    )
}

export default Composer;