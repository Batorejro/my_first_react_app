import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
//import { addCard } from '../../redux/store';

//import { useDispatch } from 'react-redux';

const CardForm = props => {
    //const CardForm = ({ columnId }) => {

    //const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        props.addCard({ title: title }, props.columnId);
        setTitle('');
    };
    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={event => setTitle(event.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};
export default CardForm;

/*


const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title });
        setTitle('');
    };

);
}
*/
