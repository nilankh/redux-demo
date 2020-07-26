// Learning about 1st way multiple reducers
const redux = require('redux');
const createStore = redux.createStore //created store

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'

    }
}

function buyIcecream() {
    return {
        type: 'BUY_ICECREAM'

    }
}
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}


const store = createStore(reducer)

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()

