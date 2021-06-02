import actionKeys from '../key';

const initialState = ["Root"]

function ancestorReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionKeys.GET_ANCESTORS:
            return [...payload]
        default:
            return state;
    }
}

export default ancestorReducer;
