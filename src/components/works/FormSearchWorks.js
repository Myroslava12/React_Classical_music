import React, { useState } from "react";
import { getComposersByWorks } from "../../services/api";


const FormSearchWorks  = ({setWorks, setIsVisible, composerID}) => {
    const [nameWork, setNameWork] = useState("");
    const [inputError, setInputError] = useState(false);
    const [error, setError] =  useState(false);
    const searchWorks = async () => {
        const works = await getComposersByWorks(composerID, nameWork);
        if (works.length !== 0) {
            setWorks(works);
            setIsVisible(false);
        } else {
            setError(true);
            setInputError(false);
        }
    }

    const hideSection = () => setIsVisible(false);

    return (
        <form className="form--search--works" onSubmit={(nameWork.length !== 0) ? searchWorks : () => {
            setInputError(true);
            setError(false);
        }} >
            <div className="form--icon--hide"><i className="fa fa-times" onClick={hideSection}></i></div>
            <h2 className="search--work--title">What works do you want to find</h2>
            {inputError && <h2 className="search--title--error">Field value cannot be empty</h2>}
            {error && <h2 className="search--title--error">No works found</h2>}
            <input className="input--search--work" type="text" value={nameWork} placeholder="e.g. Sonata or preludy..." onChange={e => setNameWork(e.target.value)} />
            <button type="submit" className="btn--search--work">Show work</button>
        </form>
    );
}

export default FormSearchWorks ;