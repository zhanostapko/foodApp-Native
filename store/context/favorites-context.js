import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState();

  const addFavorite = (id) => {
    setFavorites((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevState) => {
      prevState.filter((mealId) => mealId !== id);
    });
  };

  const value = {
    ids: favorites,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
