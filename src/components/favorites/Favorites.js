import React from 'react';
import Favorite from "./Favorite";
import { getFavoritesFromLocalStorage } from "../../services/favorites"


const Favorites = () => {

    const favoritesFromLocal = getFavoritesFromLocalStorage();
    const favoritesArrayIsNotEmpty = favoritesFromLocal.length !== 0;

    return (
        <div className="favorites--dashboard">
            {!favoritesArrayIsNotEmpty && <h1 className="favorite--title" data-aos="zoom-in">Your list of works by favorite composers is still empty</h1>}
            {favoritesArrayIsNotEmpty && <h1 className="favorite--title" data-aos="zoom-in">Your list of works by favorite composers</h1>}
            {favoritesArrayIsNotEmpty && <section className="favorite--list">
                <div className="container--app">
                    {favoritesFromLocal.map(work => {
                        return <Favorite
                            key={work.id}
                            work={work}
                         />
                    })}
                </div>
            </section>}
        </div>
    )
};

export default Favorites;