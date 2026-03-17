import { FovouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

const FavouriteProvider = ({children}) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);
    const addToFavourites = (latitude, longitude, location) => {
        setFavourites(
            ...favourites,
            {latitude: latitude, longitude: longitude, location: location}
        );
    };

    const removeRormFavourites = (location) => {
        const restFavourites = favourites.filter((fav) => fav.location !== location);
        setFavourites(restFavourites)
    }
    return <FovouriteContext.Provider value={{favourites, addToFavourites, removeRormFavourites}}>{children}</FovouriteContext.Provider>
};

export default FavouriteProvider;