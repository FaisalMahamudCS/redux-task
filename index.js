//action
const INCREMENT="increment"
const DECREMENT="decrement"

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
            count:state.count+1
        }
        
  
    default:
        state;
}
}