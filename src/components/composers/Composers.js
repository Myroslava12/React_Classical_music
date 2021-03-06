import React from 'react';
import notes from "../../images/notes.png";
import Composer from "./Composer";

const Composers = ({composers, myRef}) => {
    const composersNotEmpty = composers.length !== 0;

    return (
        <div className="section--composers" ref={myRef}>
            {composersNotEmpty && <img src={notes} className="section--img" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />}
            {composersNotEmpty && <h1 className="section--title" data-aos="zoom-in">Your result</h1>}
            {composers && composers.map((composer) => {
                return <Composer 
                    composer={composer}
                    key={composer.id}
                />
            })}
        </div>
    )
}

export default Composers;
