type LoadingActionType = {
    type: 'SET-LOADING'
    isLoading: boolean
}

export type LoadingType = {
    isLoading: boolean
}

const SET_LOADING = 'SET-LOADING'

const initState = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return { ...state, isLoading: action.isLoading };
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return { type: SET_LOADING, isLoading }
}; // fix any