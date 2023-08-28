 export const getGifs = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=RUKIHFk2nnTCKckFfeJYOAk72cg4XnrL&q=${category}&limit=10`;
    const respu = await fetch(url);
    const { data } = await respu.json();

    
    const gifs = data.map(img => ({
        id:img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }))

    return gifs;
    
}