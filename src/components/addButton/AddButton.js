import React, { Component } from "react"; 
import {BsPlus} from "react-icons/bs"; 
import {GrClose} from "react-icons/gr"; 
import { connect } from "react-redux"; 
import { addList, addCard } from "../../action";

class AddButton extends Component{

    constructor(props){
        super(props); 
        this.state={
            formOpen: false
        } 
    }
    /* Handeling creating new cards/lists
    ==========================================*/
    handleAddClick = () => { 
        this.setState({ formOpen: true})
    }
    handleFromClose = () => {
        this.setState({formOpen: false})
    }

    handleInputChange = (e) => {
       this.setState({text: e.target.value })
    }

    handleAddList = () => {
        const { dispatch } = this.props; 
        const { text } = this.state; 

        if (text){
            
            dispatch(addList(text))
        }
        return; 
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props; 
        const { text } = this.state; 

        if(text){
            dispatch(addCard(listID, text));
        }
    }

    /*Reusable button used for adding cards and lists to boards
    ===============================================================*/
    renderButton = () => {
     const { list } = this.props; 
     const listOrCard = list ? false : true;   
     
    if(listOrCard === true){
        return(
            
         <div className="button-container" style={styles.cardButton} onClick={this.handleAddClick}> 
         <BsPlus/> 
         <p className="button-text"> Add another card </p>
         </div>
        )
    } else {
        return(
        <div className="button-container" style={styles.listButton} onClick={this.handleAddClick}> 
        <BsPlus/> 
        <p className="button-text"> Add another lsit </p>
        </div>)
    }

    }
    /*Rendering the area where user enters text to create new cards or lists
    =========================================================================*/

    renderForm = () => {

        const { list } = this.props; 
        const placeHolder = list ? "Enter list title" : "Enter card title"; 
        const buttonText = list ? "Add list" : "Add card"; 

        return (
            <div style={styles.form}>
               <textarea style={styles.textareas} 
                placeholder = {placeHolder}
                autoFocus
                onBlur={this.handleFromClose}
                onChange={this.handleInputChange}/> 
                <div style={styles.formButtons}>
                    <button 
                        onMouseDown={ list ? this.handleAddList : this.handleAddCard}
                        style={styles.button}>
                        {buttonText}
                    </button>
                    <GrClose style={styles.GrClose}/>
                </div>
            </div>
        )
    }

render(){
    return (
        this.state.formOpen ? this.renderForm() : this.renderButton()
        ) 
}
}

/*Style Rules
============================================*/

const styles = {
    listButton: {
        display: "flex", 
        alignItems: "center",
        cursor: "pointer", 
        borderRadius: 3,
        color: '#ffff', 
        backgroundColor:'#488732',
        minWidth: 277,
        maxHeight: 50,
        marginLeft: 15

    }, 
    cardButton: {
        display: "flex", 
        alignItems: "center",
        cursor: "pointer", 
        color: '#838d92',
    },
    textareas: {
        width: "96%",
        borderRadius: 3,
        resize: "vertical",
        outline: "none", 
        borrder: "none", 
        marginTop: 5

    }, 
    button:{
        color: "#ffff", 
        backgroundColor: '#5aac44', 
        width: 82,
        height: 32,
        marginBottom: 5
    },
    GrClose: {
        marginLeft: 6, 
        cursor: "pointer", 
    }, 
    formButtons: {
        display: 'felx',
        marginTop: 6, 
        alignItems: "center"
        
    }, 
    form: {
        height: "100%", 
        backgroundColor: "#e2e4e6",
        borderRadius:5,
        paddingLeft: 5,
        paddingBottom: 1
    }
}

export default connect  ()(AddButton); 