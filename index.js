
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


