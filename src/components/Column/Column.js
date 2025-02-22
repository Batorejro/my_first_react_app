import styles from './Column.module.scss'
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
//import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = props => {
    //const searchString = useSelector(state => state.searchString);
    //const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()));
    const cards = useSelector(state => getFilteredCards(state, props.id));
    console.log('Column render');
    const handleClick = (columnId) => {
        //dispatch({ type: 'REMOVE_COLUMN', payload: { columnId } });

    }
    return (
        <article className={styles.column}>
            <div className={styles.title}>
                <h2><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
                <button onClick={handleClick(props.id)}>X</button>
            </div>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} card={card} columnId={props.id} cards={props.cards} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    );
};


export default Column;

//{props.cards.map(card => <Card key={card.id} id={card.id} card={card} columnId={props.id} cards={props.cards} title={card.title} removeCard={props.removeCard} />)}
//{props.cards.map(card => <Card key={card.id} title={card.title} />)}
//const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));