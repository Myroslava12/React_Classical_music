import React, { useEffect, useState } from 'react';
import Favorite from "./Favorite";
import { getFavoritesFromLocalStorage, setFavoritesToLocalStorage } from "../../services/favorites"


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritesFromLocal = getFavoritesFromLocalStorage();
        setFavorites(favoritesFromLocal);
    }, []);

    const onRemove = (id) => () => {
        const filteredFavorites = favorites.filter(el => el.id !== id);
        setFavoritesToLocalStorage(filteredFavorites);
        setFavorites(filteredFavorites);
    }

    const favoritesArrayIsNotEmpty = favorites.length !== 0;

    return (
        <div className="favorites--dashboard">
            {!favoritesArrayIsNotEmpty && <h1 className="favorite--title" data-aos="zoom-in">Your list of works by favorite composers is still empty</h1>}
            {favoritesArrayIsNotEmpty && <h1 className="favorite--title" data-aos="zoom-in">Your list of works by favorite composers</h1>}
            {favoritesArrayIsNotEmpty && <section className="favorite--list">
                <div className="container--app">
                    {favorites.map(work => {
                        return <Favorite
                            key={work.id}
                            work={work}
                            onRemove={onRemove(work.id)}
                         />
                    })}
                </div>
            </section>}
        </div>
    )
};

export default Favorites;