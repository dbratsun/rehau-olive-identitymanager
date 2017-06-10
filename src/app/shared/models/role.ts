export const Role = (state = [], action) => {
    switch(action.type) {
        case "ADD_ROLE":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE_ROLE":
            return state;
        default: 
            return state;
    }
} 
