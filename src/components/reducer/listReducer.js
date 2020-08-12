import { CONSTANT } from "../action"; 
import { GrActions } from "react-icons/gr";

let listID = 2; 
let cardID = 2;
const initState = [
    {
        title: "Backlog",
        id: 0,
        cards: [
            {
                id: 0,
                text: "UI: Modify display listing of ads (storyboards) to like the venmo videos section"
            }, 
            {
                id: 1, 
                text: "Create insights view"
            }
        ]
    }, 
    {
        title: 'Prioritized', 
        id: 1, 
        cards: [
            {
                id:0,
                text: "Language Support"
            }
        ]
    }
]


const listReducer = (state = initState, action) => {
    switch (action.type) {
        case CONSTANT.ADD_LIST: 
            const newList = {
                title: action.payload,
                cards: [], 
                id: listID 
            }
            listID += 1
            return[...state, newList]; 

            case CONSTANT.ADD_CARD: 
            const newCard = {
                text: action.payload.text,
                id: cardID
            }; 
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID){

                    return{
                        ...list, cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            })
            return newState;
        case CONSTANT.DELETE_CARD: 
        
        const newCards = state.map.filter(cardID => cardID !== cardID)
        return newCards; 
        
        default: 
        return state;
    }
}; 

export default listReducer; 