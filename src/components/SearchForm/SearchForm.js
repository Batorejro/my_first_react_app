import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
//import { useDispatch, useSelector } from 'react-redux';
//import { updateSearchString, getSearchString } from '../../redux/searchStringReducer';
//import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const dispatch = useDispatch();
    //const searchString = useSelector(getSearchString);
    //const [searchValue, setSearchValue] = useState(searchString);
    useEffect(() => {
        dispatch(updateSearchString(''));
    },);

    const handleSearch = (event) => {
        event.preventDefault();
        //dispatch(updateSearchString(searchValue));
        const newSearchString = event.target[0].value;
        dispatch(updateSearchString(newSearchString));
    }
    return (
        <form className={styles.searchForm} onSubmit={event => handleSearch(event)}>
            <TextInput placeholder="Search..." />
            <Button>
                <span className="fa fa-optin-monster" />
            </Button>
        </form>
    );
};
export default SearchForm;
