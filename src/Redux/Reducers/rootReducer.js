import userReducer from './userReducer'
import gamesReducer from "./gamesReducer"
import cartReducer from './cartReducer'
import favsReducer from './favsReducer'
const rootReducer ={
    gamesReducer,
    userReducer,
    cartReducer,
    favsReducer
}
export default rootReducer