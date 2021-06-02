import actionKeys from '../key';

const initialState = {}

function getFileFolderDetailReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionKeys.GET_FILE_FOLDER_DETAILS:
            return payload
        default:
            return state;
    }
}

export default getFileFolderDetailReducer;
