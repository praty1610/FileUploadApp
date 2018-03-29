import callApi from '../../utilis/callApi';

export const LIST_CSV_DATA = 'LIST_CSV_DATA';

export function saveCsvDataRequest(data) {
    return (dispatch) => {
        callApi('saveCsvData', 'post', data).then((response) => {
            dispatch(saveListDataInReducer(response));
        })
    }
}

export function getCscListRequest() {
    return (dispatch) => {
        callApi('getCsvListData').then((response) => {
            dispatch(saveListDataInReducer(response))
        })
    }
}

function saveListDataInReducer(data) {
    return {
        type : LIST_CSV_DATA,
        data
    }
}


