import React from 'react'; 
import { BsTrashFill, BsPencil } from 'react-icons/bs'; 

import Card from '../cards/Card';
import AddButton from '../addButton/AddButton'; 
function List ({listTitle, cards, listID}){
     
    return(
        <div style={styles.wrapper}>
       
            <div style={styles.cardHeader}>
               <button style={{float: "right"}}><BsTrashFill/></button>
                <button style={{float: "right"}}><BsPencil/></button>
                <h3>{listTitle}</h3>
            
            </div>
            
            { cards.map(card => (
                
            <Card text={card.text} key={card.id}/>
            ))}
            <AddButton listID={listID}/>
       
        </div>
    )
}

/*Style Rules
============================================*/
const styles= {
    wrapper: {
        width: 272,
        height: "100%",  
        marginLeft: 15,
        backgroundColor: "#e2e4e6",
        borderRadius:5,
        paddingLeft: 5,
        paddingBottom: 1
    }
};
export default List