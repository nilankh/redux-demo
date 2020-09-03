// Learning about multiple reducers
const redux = require("redux");
const createStore = redux.createStore; //created store
const combineReducers = redux.combineReducers;

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

// the convention is to call the combination of all your reducer as the root reducer(this method accepts an object each key/value pair for this object corresponds to a reducer, for the cake reducers i will specify cake as key and for incecream reducers will specify icecream as key)
const rootReducer = combineReducers({
  cake: cakereducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
// const store = createStore(reducer);
// see ye create store, there is a problem, the create store method accepts only one reducer, so how do we let redux know about both the reducer{{{{React provides a method that combine reducers to  combine multiple reducers into a single reducer which can be passed to create store method(created at line4)}}}}
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
