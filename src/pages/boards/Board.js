import React, { Component } from "react"; 

import ListItem from '../../components/list/List';
import { connect } from "react-redux"; 
import AddButton from "../../components/addButton/AddButton";


class Board extends Component{
    render(){
        const { lists } = this.props; 
    return(
         
        <div className="Board">
            <div style={styles.boardPage}>
                <div className="board-title" style={styles.boardTitle}>
                    {this.props.boardTitle}
                </div>
                <div className="list-container" style={styles.listContainer}>
                    {lists.map(list => 
                        (<ListItem listTitle={list.title} cards={list.cards}
                        key={list.id}
                        listID={list.id}/>))}
                        <AddButton list/>
                </div>
            </div>
        </div>
    )}
}

const mapStateToProps = state => ({
    lists: state.lists
});
  
/*Style Rules
============================================*/
const styles = {
    boardPage: {
        backgroundColor: "#519839",
        position:'absolute',
        marginTop: 53,

        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }, 
    boardTitle:{
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 15
    }, 
    listContainer:{
        display: 'flex', 
        flexDirection: "row"
    }, 
}
export default connect (mapStateToProps)(Board); 