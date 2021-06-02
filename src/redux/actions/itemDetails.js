import actionKeys from '../key'
import { getContent } from "../../files";

export default function getItemDetails(data = ["Root"]) {
    return {
        type: actionKeys.GET_FILE_FOLDER_DETAILS,
        payload: getContent(data)
    }
}
