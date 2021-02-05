export default function fetchLists(lists){
    // debugger
    return {
        type: "FETCH_LISTS", 
        payload: lists
    }
}