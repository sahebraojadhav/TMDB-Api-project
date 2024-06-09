export function searchMovie(term){
    console.log(import.meta.env.VITE_API_KEY);
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${term}`
}