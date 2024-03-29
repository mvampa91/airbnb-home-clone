export const initialState = {
    user: null
};

export const actionTypes = {
    SET_USER: 'SET_USER'
};

const reducer = (state, action) => {
    switch (action) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
                
        default:
            return state;
    }
}

export default reducer;