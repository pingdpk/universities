const reducer = (state = {data: ''}, action) => {
    switch (action.type) { //Todo: provide search autofill resp from here (another case)
        case 'FETCH_DATA':
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }

};

export default reducer;