import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const About = () => {
    return (
        <div className={styles.about}>
            <PageTitle>About</PageTitle>
            <PageTitle>Wincenty zgrywał w chacie
                Takiego Kadłubka,
                Że nawet śmieci nie musiał
                Z domu wyrzucać
            </PageTitle>
        </div>
    );
}

export default About;