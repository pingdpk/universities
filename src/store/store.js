const reducer = (state = {data: ''}, action) => {
    /*console.log('in reducer');
    console.log(reducer);
    console.log(state);
    console.log(action);
    console.log('end reducer');*/
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