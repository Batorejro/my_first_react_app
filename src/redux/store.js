import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';


/*const reducer = (state, action) => {

    if (action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn] }
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
        default:
            return state;
    }
};
*/
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };

        case 'REMOVE_COLUMN':
            return { ...state, columns: [...state.columns.filter(column => action.payload.columnId !== column.id)] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
        case 'REMOVE_CARD':
            return { ...state, cards: [...state.cards.filter(card => action.payload.cardId !== card.id)] };
        case 'UPDATE_SEARCH_STRING':
            return { ...state, searchString: action.payload };
        default:
            return state;
    }
};


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;