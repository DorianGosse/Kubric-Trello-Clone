import { CONSTANT } from "../action"; 

export const addCard = (listID, text) => {
    return {
        type: CONSTANT.ADD_CARD,
        payload: { text, listID}
    };
};

export const deleteCard = (cardID, listID) => {
    return{
        type: CONSTANT.DELETE_CARD, 
        payload: {id, listID}
    }
}