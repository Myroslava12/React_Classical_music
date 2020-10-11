import React, {useState} from 'react';
import {getComposersByName} from '../../services/api';
import Loading from '../loading/Loading';

const FormSearchComposers = ({setComposers, inputSearch, setInputSearch, setWorks}) => {
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDone(true);
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
            setDone(false);
        } else {
            setError(true);
            setDone(false);
        }  
    }

    return (
        <form onSubmit={(inputSearch.length !== 0) ? handleSubmit : null} className="form--app" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h1 className="form--title">WHAT YOU DON’T KNOW ABOUT YOUR FAVES COMPOSER?</h1>
            <div className="box--loading">{done && <Loading />}</div>
            {error && <h2 className="search--title--error">No composers found</h2>}
            <input 
                value={inputSearch} 
                onChange={(e) => setInputSearch(e.target.value)} 
                className="input--form" type="text" 
                placeholder="Ludwig van Beethoven" 
            />
            <button type="submit" className="btn--form"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default FormSearchComposers;