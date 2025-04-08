import styles from './Home.module.css';
import myCv from './PitsoCV.pdf'

function Home(){

    return(
        <div className={styles.container} id='home'>
            <h4>Software Engineer</h4>
            <h2>Hi, I'm <b className={styles.pitso}>Pitso Mkansi</b></h2>
            <p> I don't just build web application — I create fast, responsive, and 
                user-focused web experiences that drive results. My experience with frameworks like React, Next.js,
                and Node.js has allowed me to develop a keen eye for detail and a ability to deliver high-quality results.
            </p>
            <div className={styles.icons}>
                <a href={myCv} download="PitsoCV.pdf" className={styles.cvBtn}>Download CV</a>
                <a href="https://github.com/deco775" className={styles.homeIcn}><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/pitso-mkansi-85295b210/" className={styles.homeIcn}><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://x.com/Deco53270157" className={styles.homeIcn}><i className="fa-brands fa-square-x-twitter" ></i></a>
                <a href="https://www.facebook.com/mkansi.deco.7" className={styles.homeIcn}><i className="fa-brands fa-facebook" ></i></a>
            </div>
        </div>
    )
}
export default Home;
