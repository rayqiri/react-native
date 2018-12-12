
//reducer
const siswaInitialState = {
    datas: [],
    isLoading: false
}

export default function (state = siswaInitialState, action) {
    switch (action.type) {
        case "FETCH_ALL":
            state = { ...state, isLoading: true, datas: action.payload }
            break;
        case "FETCH_ALL_PENDING":
            state = { ...state, isLoading: true }
            break;

        default:
            state
            break;
    }
    return state
}
//store
