// import React, { Component } from 'react'

// export default class List extends Component {
//     render(){
//         return (
//             <li>{this.props.list.name}</li>
//         )
//     }
// }

<<<<<<< HEAD
import { connect } from 'react-redux'
import deleteList from './actions/deleteList'
import {withRouter} from 'react-router-dom'

function List(props){
    
    const handleClick = () => {
        props.deleteList(props.list.id)
        props.history.push('/lists')

    }

    return <li>{props.list && props.list.name}<button onClick={handleClick}>Delete</button></li>
}

export default withRouter(connect(null, { deleteList })(List))
=======
export default function List(props){
    return <li>{props.list && props.list.name}</li>
}
>>>>>>> 4cadec45079f9d61ad0ae778cb7e36e44d81fd44
