import actionKeys from '../key'

export function setAncestors(data) {
    return {
        type: actionKeys.GET_ANCESTORS,
        payload: data
    }
}
