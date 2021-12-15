import React, { PureComponent } from 'react'
import Lists from './Lists'
import ListForm from './ListForm'
import { Route, Switch } from 'react-router-dom'
import List from './List'
import {connect} from 'react-redux'
import {fetchLists} from './actions/listActions'

class ListContainer extends PureComponent {


    componentDidMount(){
        this.props.fetchLists()
    }

    render(){

        return (
            <>
                <Switch>
                    <Route exact path="/lists">
                        <Lists lists={this.props.lists}/>
                    </Route>
                    <Route exact path="/lists/new">
                        <ListForm />
                    </Route>
                    <Route exact path="/lists/:id" render={((routerProps) => <List list={this.props.lists.find(list => list.id === routerProps.match.params.id)} /> ) }/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        lists: state.lists.lists
    }
}


export default connect(mapStateToProps, {fetchLists})(ListContainer)

