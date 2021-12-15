import { connect } from 'react-redux'
import {deleteList} from './actions/listActions'
import {withRouter} from 'react-router-dom'
import ListForm from './ListForm'
import ItemContainer from './ItemContainer'

function List(props){
    
    const handleClick = () => {
        props.deleteList(props.list.id)
        props.history.push('/lists')

    }

    return (
    <>
        <li>{props.list && props.list.attributes.name}<button onClick={handleClick}>Delete</button></li>
        <ListForm list={props.list}/>
        <ItemContainer list={props.list} />
    </>
    )
}

export default withRouter(connect(null, { deleteList })(List))
