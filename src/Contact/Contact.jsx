import styles from './Contact.module.css';
import { useState } from 'react';
import emailjs from "emailjs-com"
import myCv from './PitsoCV.pdf'


function Contact() {
  
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p3b9gfu",
        "template_tqqv8vl",
        formData,
        "9ABxtarOoEN0yMy0w"
      )
      .then(() => {
        alert("Message sent!");
        setFormData({ email: "", message: "" }); // Reset form
      })
      .catch((error) => console.error("Error sending message:", error));
  };
  

  return (
    <div className={styles.contactContainer} id='contact' >
            <div className={styles.symbols} >
                <h2>Contact Me</h2>
                <p className={styles.emailIcon}><i className="fa-solid fa-envelope" ></i> <b>mkansipitso@gmail.com</b></p>
                <p className={styles.emailIcon}><i className="fa-solid fa-phone" ></i><b> 072 083 1144</b></p>
                <div className={styles.icons} >
                    <a href="https://github.com/deco775"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/pitso-mkansi-85295b210/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://x.com/Deco53270157"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.facebook.com/mkansi.deco.7"><i className="fa-brands fa-facebook" ></i></a>
                </div>
                <a href={myCv} download="PitsoCV.pdf" className={styles.cvBtn}>Download CV</a>
            </div>
            <form onSubmit={handleSubmit} >
                <div className={styles.inputT} >
                    <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} />
                    <input type="email" name="email"  placeholder="email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type='submit'>send</button>
                </div>
            </form>
    </div>
  )
}
export default Contact;
