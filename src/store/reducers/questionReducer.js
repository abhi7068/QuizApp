import * as actionTypes from "../actions/actionTypes";
const initialState = {
    quiz: [],
};
const questionReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
            console.log(action)
            return {
                ...state,
              quiz:[...state.quiz,action.question]
            };
        default:
            return state;
    }
};

export default questionReducer;