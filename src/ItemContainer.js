import React, {Component} from 'react'
import Item from './Item'
import ItemForm from './ItemForm'


class ItemContainer extends Component {
    render(){
        return (
            <div>
                {this.props.list.attributes.items.map(item => <Item key={item.id} item={item}/>)}
                <ItemForm />
            </div>
        )
    }
}

export default ItemContainer