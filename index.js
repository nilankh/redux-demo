// import redux from 'redux';if this react application then only
const redux = require('redux');
const createStore = redux.createStore //created store

// first we define a string constant that indicates the type of the action
const BUY_CAKE = 'BUY_CAKE'

//STEP2 Next we define our actions remember an action is an object that has a type property
// {
//     type: BUY_CAKE,
//     info: 'first redux action'
// }

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'

    }
}
// and that is it you have create your very first action in redux

// an action is an object with a type property an action creator is a function that returns an action


// Implementing Reducers
// (prevState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,//(first make a copy of state object and then only update number of cakes)
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// implementing redux store(see notes)
// first responsibilty holding the application state
const store = createStore(reducer)
// second responsibility called getState which gives the current state in the store
console.log('Initial state', store.getState())
// fourth responsibilty to allow the app to subscibe the changes in the store that is acheived using subscribe method
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
// third responsibility the store provides a dispatch method to update the state.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// final part is to unsubscribe from the store by calling the function returned by the SUBSCRIBE METHOD
unsubscribe()

