/* primero preciso extraer los juegos con mas valoracion :  http://localhost:8080/games/ */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const getGame = createAsyncThunk('getGame',async()=>{
    try{
        const response = await axios.get('http://localhost:8080/games/')
        return response.data.res
    }catch(err){
        return{payload:"Error"}
    }
})
const filterGame = createAsyncThunk('filterGame',async(value)=>{
    let {rate} = value
    try{
        const response = await axios.get('http://localhost:8080/games/?rate='+rate)
            return response.data.res
    }catch(err){
        return{
            payload:"error"
        }
    }
})


const filterSearch = createAsyncThunk('getfilterSearch', async(filter) => {
    try {
        let search = filter
        const response = await axios.get(`http://localhost:8080/games/?name=${search}`)
        return response.data.res
    } catch (err) {
        return {
            payload:"error"
        }
    }
})
const gameActions={
    getGame,
    filterGame,
    filterSearch
}
export default gameActions