// Learning about middleware
const redux = require("redux");
const reduxLogger = require('redux-logger');
const createStore = redux.createStore; //created store
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyIcecream() {
  return {
    type: "BUY_ICECREAM",
  };
}
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};



const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
    cake: cakereducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();


// import apply middleware, pass it as an argument to create store and pass in middleware to apply middle ware method