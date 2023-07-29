export const initialState = {
    basket: [],
    selected: null,
    user: null
}

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0)
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'set_user':
            return {
                ...state,
                user: action.user
            }
        case 'product_select':
            const productSelectState = {
                ...state,
                selected: action.item
            }
            // store the updated state in browser's local storage
            localStorage.setItem("selectedItem", JSON.stringify(productSelectState))
            return productSelectState
        case 'add_to_basket':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'remove_from_basket':
            let newBasket = [...state.basket]
            const itemIndex = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            
            if(itemIndex >=0) newBasket.splice(itemIndex, 1)
            else console.warn(`Cannot remove the product (id: ${action.id}) as it was not found in the cart`)

            return {
                ...state, 
                basket: newBasket
            }
        case 'empty_the_basket':
            return {
                ...state,
                basket: []
            }
        default:
            return state
    }
}

export default reducer