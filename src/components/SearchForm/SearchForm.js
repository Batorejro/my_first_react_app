import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString, getSearchString } from '../../redux/store';
import { useState } from 'react';

const SearchForm = () => {
    //let searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();
    const searchString = useSelector(getSearchString);
    const [searchValue, setSearchValue] = useState(searchString);

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(updateSearchString(searchValue));
        //dispatch({ type: 'UPDATE_SEARCH_STRING', payload: event.target[0].value });


    }
    return (
        <form className={styles.searchForm} onSubmit={event => handleSearch(event)}>
            <TextInput placeholder="Search..." value={searchValue} onChange={event => setSearchValue(event.target.value)} />
            <Button>
                <span className="fa fa-optin-monster" />
            </Button>
        </form>
    );
};
export default SearchForm;
