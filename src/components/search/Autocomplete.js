import React from "react";

const Autocomplete = ({name, setInputSearch, setComposersName}) => {

    const onClick = () => {
        setInputSearch(name);
        setComposersName([]);
    };

    return (
        <li className="list--tag--name" onClick={onClick}>{name}</li>
    )
}

export default Autocomplete;