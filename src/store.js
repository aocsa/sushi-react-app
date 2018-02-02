import createStore from 'redux-zero'
import {dishes, shopDishes, selectedFood} from './dishes'

const initialState = {
   dishes: dishes,
   shopDishes:shopDishes,
   selectedFood: 0
}

const store = createStore(initialState)
export default store