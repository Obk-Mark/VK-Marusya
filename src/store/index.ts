import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from './UserPorfileSlice';
import favoritesReducer from './FavoritesSlice';
import randomMovieReducer from './RandomMovieSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        user: userProfileReducer,
        favorites: favoritesReducer,
        randomMovie: randomMovieReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;