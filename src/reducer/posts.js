import {FETCH_API_POST, GET_TOTAL_PAGE, NEXT_PAGE, PREV_PAGE} from '../Store/Constant'

const initPostsState = {
    post: [],
    fillter: {
        _limit: 16,
        _page: 1,
    },
    totalRow: 17,
    loading: false
}

const postReducer = (state = initPostsState, action) => {
    switch(action.type){
        case FETCH_API_POST:
            if(action.payload){
                return {
                    ...state,
                    post : [...action.payload],
                    loading: true
                }
            }
            return{
                ...state,
                post: [],
                loading: false

            }
        case GET_TOTAL_PAGE:
            return {
                ...state,
                totalRow: action.payload
            }

        case NEXT_PAGE :
            const fillterNew = {...state.fillter}
            fillterNew._page = action.payload
            return {
                ...state,
                fillter: fillterNew,
                loading: false
            }

        case PREV_PAGE:
            const fillterPrev = {...state.fillter}
            fillterPrev._page = action.payload
            return {
                ...state,
                fillter: fillterPrev,
                loading: false
            }

        default:

            return state;
    }

}

export default postReducer