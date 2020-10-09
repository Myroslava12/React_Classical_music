const FAVORITES_KEY = "favorites";

export const getFavoritesFromLocalStorage = () => {
    try {
        const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY));
        return favorites || [];
    } catch {
        return [];
    }
}

export const setFavoritesToLocalStorage = (favorites = []) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}