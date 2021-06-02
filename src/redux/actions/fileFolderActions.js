import actionKeys from '../key'
import files from "../../files";

export function getFileFolderInitialList() {
    return {
        type: actionKeys.GET_FILE_FOLDER_LIST,
        payload: files
    }
}

export function addNewItem(data) {
    return {
        type: actionKeys.ADD_NEW_ITEM,
        payload: data
    }
}

export function deleteItem(data) {
    return {
        type: actionKeys.DELETE_ITEM,
        payload: data
    }
}
