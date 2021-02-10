import { connect } from 'react-redux'
import deleteList from './actions/deleteList'
import {withRouter} from 'react-router-dom'
import ListForm from './ListForm'

function List(props){
    
    const handleClick = () => {
        props.deleteList(props.list.id)
        props.history.push('/lists')

    }

    return (
    <>
        <li>{props.list && props.list.name}<button onClick={handleClick}>Delete</button></li>
        <ListForm list={props.list}/>
    </>
    )
}

export default withRouter(connect(null, { deleteList })(List))
