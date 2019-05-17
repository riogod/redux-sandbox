const initialState =  {
        a: 1,
        counter: 12
};


const reducer = (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case 'RND':
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            };

        default:
            return state;
    }

};

export default reducer;