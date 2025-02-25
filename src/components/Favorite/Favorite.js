import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const Favorite = () => {
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <PageTitle>Juan De Amigo.</PageTitle>
        </div>
    );
}

export default Favorite;

