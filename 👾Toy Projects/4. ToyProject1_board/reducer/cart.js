const reducer = (state=0, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return state+1;
        default:
            return state;
    }
}

export default reducer;