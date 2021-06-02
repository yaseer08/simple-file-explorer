import { combineReducers } from "@reduxjs/toolkit";
import ancestorReducer from "./ancestorReducer";
import fileFolderListReducer from "./fileListReducer";
import getFileFolderDetailReducer from "./fileFolderDetailReducer";

const reducer = combineReducers({
    ancestors: ancestorReducer,
    data: fileFolderListReducer,
    activeData: getFileFolderDetailReducer
});

export default reducer;