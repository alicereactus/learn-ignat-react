export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
        }
        case "check": {
            return state.filter((u: {_id: number, name: string, age:number }) => u.age >= action.payload)
        }
        default: return state
    }
};