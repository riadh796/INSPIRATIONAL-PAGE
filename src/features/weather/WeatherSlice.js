import { createSlice, createAsyncThunk }
from '@reduxjs/toolkit';


const initialState = {
weather: undefined,
 status: 'idle'
};

export const fetchWeather =createAsyncThunk(
   'weather/fetchWeather', async(arg,thunkAPI) => {
     
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=32.735687&lon=-97.1080656&appid=f7d81639111bacdf7a2c41ff5183d307`;
    const response = await fetch(API_URL);
    const json = await response.json();
    
    return json;
});

export const WeatherSlice = createSlice({
 name: 'weather',

 initialState,
 reducers: {},

 extraReducers: {
 [fetchWeather.pending]: (state, action) => {
    state.status = 'loading';
 },

 [fetchWeather.fulfilled]: (state,action) => {
    state.status = 'succeeded';
    state.weather = action.payload;
 }
 }
}); 
export const selectWeather = (state) => state.weather.weather;

export const weatherSliceReducer = WeatherSlice.reducer;

