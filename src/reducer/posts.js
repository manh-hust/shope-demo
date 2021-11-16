const initPostsState = {
    post: [],
    fillter: {
        _limit: 10,
        _page: 1,
    },
    totalRow: 11

}

const postReducer = (state = initPostsState, action) => {
    switch(action.type){
        case 'FETCH_API_POST':
            return {
                ...state,
                post : [...action.payload]
            }                 
        case 'GET_TOTAL_PAGE':
            return {
                ...state,
                totalRow: action.payload
            }

        case 'NEXT_PAGE' :
            const fillterNew = {...state.fillter}
            fillterNew._page = action.payload
            return {
                ...state,
                fillter: fillterNew
            }

        case 'PREV_PAGE':
            const fillterPrev = {...state.fillter}
            fillterPrev._page = action.payload
            return {
                ...state,
                fillter: fillterPrev
            }

        default:

            return state;
    }

}

export default postReducer