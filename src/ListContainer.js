import React, { PureComponent } from 'react'
import Lists from './Lists'
import ListForm from './ListForm'
import { Route, Switch } from 'react-router-dom'
import List from './List'
import { connect } from 'react-redux'

class ListContainer extends PureComponent {

    // constructor(props){
    //     console.log("constructor")
    //     super(props)
    //     this.state = {
    //         lists: []
    //     }

    //     // this.submitList = this.submitList.bind(this)
    // }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/lists`)
    //     .then(res => res.json())
    //     .then(lists => {
    //         this.setState({ lists })
    //         this.setState((prevState) => ({loading: !prevState.loading}))
    //     })
    // }

    // submitList(formData){
    //     const list = {name: formData.inputVal}
        
    //     fetch(`http://localhost:3000/lists`, {
    //         method: 'POST', 
    //         headers: {
    //             "content-type": "application/json", 
    //             "accepts": "application/json"
    //         }, 
    //         body: JSON.stringify({ list })
    //     }).then(res => res.json())
    //     .then(list => {
    //         this.setState((prevState) => {
    //             return {lists: [...prevState.lists, list]}
    //         })
    //     })

    // }

    render(){
        // debugger
        return (
            <>
                <Switch>
                    <Route exact path="/lists">
                        <Lists lists={this.props.lists}/>
                    </Route>
                    <Route exact path="/lists/new">
                        <ListForm submitList={this.submitList}/>
                    </Route>
                    <Route exact path="/lists/:id" render={((routerProps) => <List list={this.props.lists.find(list => list.id === parseInt(routerProps.match.params.id))} /> ) }/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(ListContainer)

// list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id)