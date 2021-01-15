import React, {Component} from 'react'
import Item from './Item'
import ItemForm from './ItemForm'

class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: ["Exercise", "Code"]
        }
    }

    renderItems(){
        return this.state.list.map(item => <Item item={item}/>)
    }

    submitItem(item){
        this.setState({list: [...this.state.list, item.inputVal]})
    }

    render(){
        return (
            <div>
                <ItemForm submitItem={this.submitItem.bind(this)}/>
                <ul>
                    {this.renderItems()}
                </ul>
            </div>

        )
    }
}

List.defaultProps = {
    list: ["Code"]
}

export default List