
import  * as types  from "./actionType"

export const addProduct = (id,product,quantity)=>{

        return {
            type:types.ADD_PRODUCT,
            payload : {id:id,product:product,quantity:quantity}
        }

}

export const deleteProduct = (id) =>{
    return {
        type : types.DELETE_PRODUCT,
        payload:{id}
    }
}
export const updateProduct = (id, quantity) =>{
    return {
        type : types.UPDATE_PRODUCT,
        payload:{id,quantity}
    }
}
export const incrementProduct = (id) => {
    return {
      type: types.INCREMENT_PRODUCT,
      payload: { id },
    };
  };
  export const decrementProduct  = (id) => {
    return {
      type: types.DECREMENT_PRODUCT,
      payload: { id },
    };  
  };
  export const resetProduct  = (id) => {
    return {
      type: types.RESET_PRODUCT,
      payload: { id },
    };
}