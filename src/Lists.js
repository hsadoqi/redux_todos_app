import React, {PureComponent} from 'react'
import List from './List'
import {Link} from 'react-router-dom'

export default class Lists extends PureComponent {
    render(){
        return (
            <ul>
                {this.props.lists.map((list) => <Link to={`/lists/${list.id}`}><List list={list}/></Link>)}
            </ul>
        )
    }
}

Lists.defaultProps = {
    lists: [{name: "anotha one"}]
}