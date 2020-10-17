import React, {useState} from 'react';
import {getComposersByName, autocomplete} from '../../services/api';
import Loading from '../loading/Loading';
import {scrollToRef} from "../../services/scroll";
import AutoComplete from './Autocomplete';

const FormSearchComposers = ({setComposers, inputSearch, setInputSearch, setWorks, myRef}) => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [composersName, setComposersName] = useState([]);

    const listIsVisible = (composersName.length !== 0 && inputSearch.length !== 0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputSearch.length === 0) {
            return;
        }

        setIsLoading(true);
        const composersFromAPI = await getComposersByName(inputSearch);
        setIsLoading(false);
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
            scrollToRef(myRef);
        } else {
            setError(true);
            setIsLoading(false);
        }  
    }

    const onChange = async (e) => {
        setInputSearch(e.target.value);
        if (inputSearch.length > 0) {
            const composersName = await autocomplete();
            const filteredComposerName = composersName.filter(name => {
                const lowerLetters = name.toLowerCase();
                return lowerLetters.indexOf(inputSearch.toLowerCase()) > -1
            });
            setComposersName(filteredComposerName);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form--app" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h1 className="form--title">WHAT YOU DON’T KNOW ABOUT YOUR FAVES COMPOSER?</h1>
            <div className="box--loading">{isLoading && <Loading />}</div>
            <div className="form--box">
                <input 
                    value={inputSearch} 
                    onChange={onChange} 
                    className="input--form" type="text" 
                    placeholder="Ludwig van Beethoven" 
                />
                <button type="submit" className="btn--form"><i className="fa fa-search"></i></button>
            </div>
            {error && <p className="search--title--error">Oops, can't find the composer with this name...</p>}
            {listIsVisible && <ul className="list--tags">
                {composersName.map((name, id) => {
                    return <AutoComplete key={id} name={name} setInputSearch={setInputSearch} setComposersName={setComposersName} />
                })}
            </ul>}
        </form>
    )
}

export default FormSearchComposers;