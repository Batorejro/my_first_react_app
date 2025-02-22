import styles from './Card.module.scss';
//import { useDispatch } from 'react-redux';

const Card = props => {
    //const dispatch = useDispatch();
    const handleClick = (cardId) => {

    }
    return (
        <li className={styles.card}>{props.title}<button onClick={handleClick(props.id)}>X</button></li>
    );
};
export default Card;