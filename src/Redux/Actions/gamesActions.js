/* primero preciso extraer los juegos con mas valoracion :  http://localhost:8080/games/ */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const getGame = createAsyncThunk('getGame', async () => {
    try {
        const response = await axios.get('http://localhost:8080/games/')
        return response.data.res
    } catch (err) {
        return { payload: "Error" }
    }
})
const filterGame = createAsyncThunk('filterGame', async (value) => {
    let { rate } = value
    console.log(rate)
    try {
        const response = await axios.get('http://localhost:8080/games/?rate=' + rate)
        return response.data.res
    } catch (err) {
        return {
            payload: "error"
        }
    }
})
const filterGameInput = createAsyncThunk('filterGameInput', async ({ category, value, order }) => {
    console.log(order);
    try {
        const response = await axios.get(`http://localhost:8080/games?${category}${value}${order}`)
        return { game: response.data.res }
    } catch (err) {
        return {
            payload: "error"
        }
    }
})

const gameActions = {
    getGame,
    filterGame,
    filterGameInput
}
export default gameActions