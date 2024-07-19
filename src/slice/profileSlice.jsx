import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loadUser(state) {
            state.user = JSON.parse(localStorage.getItem('user')) || null;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    }
});

export const { setUser, loadUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
