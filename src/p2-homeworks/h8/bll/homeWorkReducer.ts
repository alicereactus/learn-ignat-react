export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            if (action.payload === 'up') {
                return [...state].map(u => ({ ...u })).sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                return [...state].map(u => ({ ...u })).sort((a, b) => a.name < b.name ? 1 : -1)
            }
        }
        case "check": {
            return [...state].map(u => ({ ...u })).filter(u => u.age >= action.payload)
        }
        default: return state
    }
};