export default function itemReducer(state=[], action){
    debugger
    switch(action.type){
        case "ADD_ITEM":
            return {
                lists: [...state.lists, action.payload]
            }
        default: 
            return state
    }

}