
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=xDnl7Na0p9UNHISs7ZZVjrpGCmH25fTH`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
        return {
            id,
            title,
            url
        }
    })
   return gifs;
}