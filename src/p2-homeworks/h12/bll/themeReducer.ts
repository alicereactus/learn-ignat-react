type changeThemeActionType = {
    type: 'CHANGE-THEME'
    option: string
}

type ThemeType = {
    theme: string
}

const CHANGE_THEME = 'CHANGE-THEME'

const initState = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: changeThemeActionType): ThemeType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return { ...state, theme: action.option };
        }
        default: return state;
    }
};

export const changeThemeAC = (option: string): changeThemeActionType => {
    return {
        type: 'CHANGE-THEME',
        option
    }
}; // fix any