import React from 'react';

const FormSearch = () => {

    return (
        <form className="form--app">
            <h1 className="form--title">WHAT YOU DON’T KNOW ABOUT YOUR FAVES COMPOSER?</h1>
            <input className="input--form" type="text" placeholder="Ludwig van Beethoven" />
            <button className="btn--form"><i class="fa fa-search"></i></button>
        </form>
    )
}

export default FormSearch;