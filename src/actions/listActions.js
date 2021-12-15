export function addList(list){
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({list})
        }

        fetch(`http://localhost:3000/lists`, options)
        .then(res => res.json())
        .then(list => {
            dispatch({type: "ADD_LIST", payload: list.data})
        })
    }
}

export function deleteList(listId){
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/lists/${listId}`, options)
        .then(res => res.json())
        .then(message => {
            dispatch({type: "DELETE_LIST", payload: listId})
        })
    }
}

export function editList(list){
    return (dispatch) => {
        const options = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({list})
        }

        fetch(`http://localhost:3000/lists/${list.id}`, options)
        .then(res => res.json())
        .then(list => {
            dispatch({type: "EDIT_LIST", payload: list.data})
        })
    }
}

export function fetchLists(lists){
    return (dispatch) => {
        fetch(`http://localhost:3000/lists`)
        .then(res => res.json())
        .then(lists => {
            dispatch({type: "FETCH_LISTS", payload: lists.data})
        })
    }
}
