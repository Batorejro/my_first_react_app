import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const listId = props.listId;
        //dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });//z tym się bujałem przed dodaniem dispatch;)
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    }

    return (

        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add Column</Button>
        </form>
    );
};

export default ColumnForm;