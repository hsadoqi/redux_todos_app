// import React, { Component } from 'react'

// export default class List extends Component {
//     render(){
//         return (
//             <li>{this.props.list.name}</li>
//         )
//     }
// }

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