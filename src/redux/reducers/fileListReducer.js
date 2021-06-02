/* eslint-disable no-eval */
import actionKeys from "../key";

const initialState = {};

function fileFolderListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionKeys.GET_FILE_FOLDER_LIST:
            return payload;
        case actionKeys.ADD_NEW_ITEM:
            if (payload.ancestors.length) {
                let obj = state;
                payload.ancestors.forEach(key => {
                    obj = obj[key]
                })
                obj[payload.name] = (payload.type === 'file') ? true : {}
                return { ...state }
            }
            return state;
        case actionKeys.DELETE_ITEM:
            if (payload.ancestors.length) {
                let obj = state;
                payload.ancestors.forEach(key => {
                    obj = obj[key]
                })
                delete obj[payload.name]
                return { ...state }
            }
            return state;
        default:
            return state;
    }
}

export default fileFolderListReducer;