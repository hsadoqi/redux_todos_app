export default function deleteList(list){
    return {
        type: "DELETE_LIST", 
        payload: list
    }
}