import React from 'react'; 
import { BsTrashFill, BsPencil } from 'react-icons/bs'; 
import { connect } from "react-redux"; 
import { deleteCard } from "../../action";

const handleCardDelete =()=>{
    dispatch(deleteCard(cardID))
}

function Card ({text}) {
    return (
        <div style={styles.wrapper}>
        <button 
        style={styles.deleteButton}
        onClick ={handleCardDelete}><BsTrashFill/></button>
        <button style={styles.editButton}><BsPencil/></button>
        <p style={styles.text}>{text}</p>
        </div>
    )
}


/*Style Rules
============================================*/
const styles = {
   text: {
       backgroundColor: "#ffff",
       marginTop: 10,
       marginRight: 5,
       marginBottom: 5,
       borderRadius: 3,
       padding: 10

   },
   editButton: {
       float: "right",
       marginTop: 4,
        
   },
   deleteButton: {
    float: "right",
    marginTop: 4,
    marginRight: 10
   }
}
export default connect ()(Card);