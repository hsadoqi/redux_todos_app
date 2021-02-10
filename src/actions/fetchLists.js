export default function fetchLists(lists){
    return (dispatch) => {
        fetch(`http://localhost:3000/lists`)
        .then(res => res.json())
        .then(lists => {
            dispatch({type: "FETCH_LISTS", payload: lists})
        })
    }
}