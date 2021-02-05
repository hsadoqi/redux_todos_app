export default function listReducer(state, action){
    switch(action.type){
        case "FETCH_LISTS":
            return {
                lists: action.payload
            }
        case "ADD_LIST":
            return {
                lists: [...state.lists, action.payload]
            }
        case "DELETE_LIST":
            const newList = state.lists.filter(list => list.id !== action.payload)
            return {
                lists: newList
            }
        default: 
            return state
    }

}
