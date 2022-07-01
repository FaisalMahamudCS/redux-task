const { createStore} =require('redux');
//action
const INCREMENT="increment"
const DECREMENT="decrement"
const RESET="reset"

const initialCounterState={
count:0
}
const incrementCounter=()=>{
    return {
        type:INCREMENT,
    };
};
const decrementCounter=()=>{
    return {
        type:DECREMENT,
        
    };
};
const resetCounter=()=>{
    return {
        type:RESET,
        
    };
};
incrementCounter();
//reducer will handle all logic based on logics
const counterReducer=(state=initialCounterState,action)=>{
switch (action.type) {
    case INCREMENT:
        return {
            ...state,
            count:state.count+1
        }
        
     case DECREMENT:
        
        return {
            ...state,
            count:state.count-1
        }
        
        case RESET:
        
            return {
                ...state,
                count:0
            }
            
    default:
        state;
}
}
//store will hold state 
//by getState() can know about state
//dispatch() we can dispatch any action when new come
//subscribe() we can store with view

//create store
const store=createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})
//dispatch actions

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())
