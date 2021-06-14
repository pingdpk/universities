import constants from '../util/constants'
const reducer = (state = {data: ''}, action) => {
    switch (action.type) { //Todo: provide search autofill resp from here (another case)
        case constants.STORE_KEY_WORDS.FETCH:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }

};

export default reducer;