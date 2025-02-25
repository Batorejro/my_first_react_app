import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const About = () => {
    return (
        <div className={styles.about}>
            <PageTitle>About</PageTitle>
            <PageTitle>Coś nowego</PageTitle>
        </div>
    );
}

export default About;