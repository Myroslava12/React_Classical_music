import React, { useState } from 'react';
import {getComposersByName} from '../../services/api';

const FormSearchComposers = ({setComposers, inputSearch, setInputSearch, setWorks}) => {
    const [error, setError] = useState(false);
    const handleSubmit = async () => {
        const composersFromAPI = await getComposersByName(inputSearch);
        if (composersFromAPI.length !== 0) {
            setComposers(composersFromAPI.map(composer => ({
                id: composer.id,
                name: composer.complete_name,
                birth: composer.birth,
                death: composer.death,
                epoch: composer.epoch,
                img: composer.portrait,
            })));
            setInputSearch('');
            setWorks([]);
            setError(false);
        } else {
            setError(true);
        }  
    }

    return (
        <form onSubmit={(inputSearch.length !== 0) ? handleSubmit : null} className="form--app" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
            <h1 className="form--title">WHAT YOU DON’T KNOW ABOUT YOUR FAVES COMPOSER?</h1>
            {error && <h2 className="search--title--error">No composers found</h2>}
            <input 
                value={inputSearch} 
                onChange={(e) => setInputSearch(e.target.value)} 
                className="input--form" type="text" 
                placeholder="Ludwig van Beethoven" 
            />
            <button className="btn--form"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default FormSearchComposers;