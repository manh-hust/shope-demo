import { FETCH_ALL_CATEGORIES } from "../Store/Constant";

const initState = []

const categoryReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_ALL_CATEGORIES :
            return action.payload
        default : 
            return state


    }

}

export default categoryReducer