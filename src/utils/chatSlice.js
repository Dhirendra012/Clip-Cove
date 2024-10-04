import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessaages : (state , action) => {
            state.messages.splice(15,1); // It will delete if size increase by 15
            state.messages.unshift(action.payload);
        },
    },
});

export const { addMessaages } = chatSlice.actions;

export default chatSlice.reducer;