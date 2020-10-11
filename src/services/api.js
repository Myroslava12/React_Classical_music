export const getComposersByName = async (name) => {
    const urlAPI = `https://api.openopus.org/composer/list/search/${name}.json`;
    try {
        const response = await fetch(urlAPI);
        const result = await response.json();
        return (result.status.success === "true") ? result.composers : [];
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const getComposersByWorks = async (id, name) => {
    const urlAPI = `https://api.openopus.org/work/list/composer/${id}/genre/all/search/${name}.json`;

    try {
        const response = await fetch(urlAPI);
        const result = await response.json();
        return (result.status.success === "true") ? result.works : [];
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const getVideoFromYoutube = async (name, title) => {
    const key = "AIzaSyALeIX6U8_icC1lS-leiWjH5qPkBlvQHfA";
    const urlAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}${title}&maxResult=1&key=${key}`;

    try {
        const response = await fetch(urlAPI);
        const result = await response.json();
        return result.items[0];
    } catch (err) {
        return;
    }
}