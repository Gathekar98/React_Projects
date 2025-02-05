// import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
// import { MdEmail, MdMessage } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("Ashwini");
  const [email, setEmail] = useState("ashwinigathekar@gmail.com");
  const [text, setText] = useState("hello i am front end developer trainee");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea rows={6} name="text"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            <p>
              {name} {email} {text}
            </p>
          </div>
        </form>
      </div>

      <div>
        <img
          className={styles.contactimage}
          src="/images/service_image.png"
        ></img>
      </div>
    </section>
  );
};

export default ContactForm;
