export default function editList(list){
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
            dispatch({type: "EDIT_LIST", payload: list})
        })
    }
}