import React, { useState } from "react";
import { getComposersByWorks } from "../../services/api";
import Loading from "../loading/Loading";
import {scrollToRef} from "../../services/scroll";


const FormSearchWorks  = ({setWorks, setIsVisible, composerID, myRef}) => {
    const [nameWork, setNameWork] = useState("");
    const [inputError, setInputError] = useState(false);
    const [error, setError] =  useState(false);
    const [done, setDone] = useState(false);

    const searchWorks = async (e) => {
        e.preventDefault();
        if ((nameWork.length === 0)) {
            setInputError(true);
            setError(false);
            return;
        }

        setDone(true);
        const works = await getComposersByWorks(composerID, nameWork);
        if (works.length !== 0) {
            setWorks(works);
            setIsVisible(false);
            setDone(false);
            scrollToRef(myRef)
        } else {
            setError(true);
            setInputError(false);
            setDone(false);
        }
    }

    const hideSection = () => setIsVisible(false);

    const onChange = e => setNameWork(e.target.value);

    return (
        <form className="form--search--works" onSubmit={searchWorks}>
            {done && <Loading />}
            <div className="form--icon--hide"><i className="fa fa-times" onClick={hideSection}></i></div>
            <p className="search--work--title">What works do you want to find?</p>
            {inputError && <p className="search--title--error">Field value cannot be empty</p>}
            {error && <p className="search--title--error">No works found</p>}
            <input className="input--search--work" type="text" value={nameWork} placeholder="e.g. Sonata or preludy..." onChange={onChange} />
            <button type="submit" className="btn--search--work">Show work</button>
        </form>
    );
}

export default FormSearchWorks ;