import React, {Component} from 'react'
import Item from './Item'

class List extends Component {

    // static defaultProps = {
    //     list: ["Sleep"]
    // }

    constructor(props){
        super(props)
        this.state = {
            list: ["Exercise", "Code"], 
            otherKey: "Hello"
        }
    }

    renderItems(){
        return this.state.list.map(item => <Item item={item} potato={this.itemFunction}/>)
    }

    // handleClick = () => {
    //     this.setState((state, props) => {
    //         return {
    //             list: [...state.list, "Teaching"]
    //         }
    //     })

    // }

    itemFunction = (info) => {
        console.log(info)
        this.setState({
            num: 1
        })
    }



    render(){
        console.log(this.state)
        return (
            <div>
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