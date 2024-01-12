import {legacy_createStore as createStore} from 'redux'
import { productReducer } from './redux/reducer'
import { ADD_PRODUCT } from './redux/actionType'
import { addProduct,deleteProduct,updateProduct,incrementProduct,decrementProduct,resetProduct } from './redux/action'
import './App.css'

// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]


const store = createStore(productReducer)


store.dispatch({type:ADD_PRODUCT,payload:{id:2,product:'🍉',quantity:9}})
store.dispatch(addProduct(3,'🍐',100))
store.dispatch(deleteProduct(3))
store.dispatch(updateProduct(2, 7));
store.dispatch(incrementProduct(1));
store.dispatch(decrementProduct(1));
store.dispatch(resetProduct(1));
console.log(store.getState())
function App() {

  return (
    <>
    <ul>

      {store.getState().cart.map((item)=>(
          <li key={item.id}>{item.id} product is :{item.product} quantity is :: {item.quantity}</li>
        ))}
        </ul>
    </>
  )
}

export default App
