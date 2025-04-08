import styles from './TechSkills.module.css'
import logo1 from '../assets/logos1.png'
import logo2 from '../assets/logos2.png'
import logo3 from '../assets/logos3.png'

function TechSkills(){

    return(
       <>
         <div className={styles.techSkillsContainer} id='skills'>
            <h2 className={styles.title} >Technical Skills</h2>
            <div className={styles.program}>
                <div className={`${styles.pro} ${styles.firstPro}`}>
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>C</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript ES6+</li>
                    </ul>
                    <img className={styles.logos} src={logo1}/>
                </div>
                <div className={`${styles.pro} ${styles.secondPro}`}>
                    <h3>Web Devevlopment</h3>
                    <ul>
                        <li>HTML5, CSS and JavaScript</li>
                        <li>React and Next.js</li>
                        <li>Express.js</li>
                        <li>Flask</li>
                        <li>MySQL</li>
                    </ul>
                    <img className={styles.logos} src={logo2}/>
                </div>
                <div className={`${styles.pro} ${styles.thirdPro}`}>
                    <h3>Tools</h3>
                    <ul>
                        <li>Linux</li>
                        <li>VS Code</li>
                        <li>JSON & RESTful API</li>
                        <li>Git and Github</li>
                        <li>Canva</li>
                    </ul> 
                    <img className={styles.logos} src={logo3}/>                   
                </div>
        </div></div>
       </>
    )
}

export default TechSkills;