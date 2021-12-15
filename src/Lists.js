import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Lists extends PureComponent {

    render(){
        return (
            <ul>
                {this.props.lists.map((list) => <Link to={`/lists/${list.id}`}><li key={list.id}>{list && list.attributes.name}</li></Link>)}
            </ul>
        )
    }
}


Lists.defaultProps = {
    lists: [{attributes: {name: "anotha one"}}]
}