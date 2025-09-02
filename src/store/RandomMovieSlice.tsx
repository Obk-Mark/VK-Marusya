import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMovie } from "../api/movies/types";

interface RandomMovieState {
    data: TMovie | null;
    isLoading: boolean;
    isFetching: boolean;
}

const initialState: RandomMovieState = {
    data: null,
    isLoading: true,
    isFetching: true
}

const randomMovieSlice = createSlice({
    name: "randomMovie",
    initialState,
    reducers: {
        setRandomMovie: (state, action: PayloadAction<{
            movie: TMovie | null;
            isLoading: boolean;
            isFetching: boolean;
        }>) => {
            state.data = action.payload.movie;
            state.isLoading = action.payload.isLoading;
            state.isFetching = action.payload.isFetching;
        }
    }
});

export const { setRandomMovie } = randomMovieSlice.actions;
export default randomMovieSlice.reducer;