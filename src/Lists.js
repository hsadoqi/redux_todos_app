import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Lists extends PureComponent {

    render(){
        return (
            <ul>
                {this.props.lists.map((list) => <Link to={`/lists/${list.id}`}><li>{list.name}</li></Link>)}
            </ul>
        )
    }
}


Lists.defaultProps = {
    lists: [{name: "anotha one"}]
}